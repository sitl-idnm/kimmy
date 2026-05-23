#!/usr/bin/env bash
# Однократная настройка VPS (Ubuntu/Debian). Запуск: sudo bash bootstrap.sh
set -euo pipefail

DEPLOY_USER="${DEPLOY_USER:-root}"
DEPLOY_DIR="/opt/deploy"
WWW_DIR="/var/www"

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root: sudo bash bootstrap.sh" >&2
  exit 1
fi

echo "==> packages"
apt-get update
apt-get install -y curl git nginx ca-certificates gnupg

echo "==> Node.js 20"
if ! command -v node >/dev/null 2>&1 || [[ "$(node -v)" != v20* ]]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

echo "==> yarn + pm2"
npm install -g yarn pm2
pm2 startup systemd -u "$DEPLOY_USER" --hp "/${DEPLOY_USER}" || true

echo "==> deploy scripts"
mkdir -p "$DEPLOY_DIR" "$WWW_DIR"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cp "$SCRIPT_DIR/deploy.sh" "$SCRIPT_DIR/ecosystem.config.cjs" "$DEPLOY_DIR/"
chmod +x "$DEPLOY_DIR/deploy.sh"

clone_repo() {
  local name="$1"
  local url="$2"
  local branch="$3"
  local target="$WWW_DIR/$name"

  if [[ -d "$target/.git" ]]; then
    echo "    skip clone ($target exists)"
    return
  fi

  git clone --branch "$branch" "$url" "$target"
}

echo "==> clone repositories (HTTPS; для private — настрой deploy key)"
clone_repo kimmy "https://github.com/sitl-idnm/kimmy.git" master
clone_repo kimmy-seo "https://github.com/sitl-idnm/Kimmy-SEO.git" master
clone_repo kimmy-spb "https://github.com/VLGKiwi/Kimmy-spb.git" main

echo "==> first build (может занять несколько минут)"
bash "$DEPLOY_DIR/deploy.sh" kimmy
bash "$DEPLOY_DIR/deploy.sh" kimmy-seo
bash "$DEPLOY_DIR/deploy.sh" kimmy-spb

echo "==> nginx"
NGINX_AVAILABLE="/etc/nginx/sites-available"
NGINX_ENABLED="/etc/nginx/sites-enabled"
mkdir -p "$NGINX_AVAILABLE" "$NGINX_ENABLED"

for site in kimmy kimmy-seo kimmy-spb; do
  src="$SCRIPT_DIR/nginx/${site}.conf"
  if [[ -f "$src" ]]; then
    cp "$src" "$NGINX_AVAILABLE/${site}"
    ln -sf "$NGINX_AVAILABLE/${site}" "$NGINX_ENABLED/${site}"
  fi
done

rm -f "$NGINX_ENABLED/default"
nginx -t
systemctl enable nginx
systemctl reload nginx

echo ""
echo "Готово. Дальше:"
echo "  1. DNS: A-записи на IP сервера (kim.agency, www, kim-agency.ru, www, spb.kim.agency)"
echo "  2. certbot --nginx -d kim.agency -d www.kim.agency"
echo "     certbot --nginx -d kim-agency.ru -d www.kim-agency.ru"
echo "     certbot --nginx -d spb.kim.agency"
echo "  3. В GitHub каждого репо: Secrets → SSH_HOST, SSH_USER, SERVER_SSH_KEY"
echo "  4. pm2 save && pm2 startup (если ещё не сделано)"
