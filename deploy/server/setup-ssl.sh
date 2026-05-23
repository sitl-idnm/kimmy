#!/usr/bin/env bash
set -euo pipefail

EMAIL="${CERTBOT_EMAIL:-info@kim.agency}"

apt-get update -qq
apt-get install -y -qq certbot python3-certbot-nginx

# Временный HTTP-only для первого выпуска сертификатов
for site in kimmy kimmy-seo kimmy-spb; do
  sed 's/listen 443/# listen 443/g; s/ssl_certificate/# ssl/g; s/include \/etc\/letsencrypt/# include/g; s/ssl_dhparam/# ssl_dhparam/g; s/return 301 https/return 404 #/g' \
    "/etc/nginx/sites-available/${site}.conf" > "/tmp/${site}-http.conf" 2>/dev/null || true
done

certbot certonly --webroot -w /var/www/html \
  -d kim.agency -d www.kim.agency \
  --non-interactive --agree-tos -m "$EMAIL" || true

certbot certonly --webroot -w /var/www/html \
  -d kim-agency.ru -d www.kim-agency.ru \
  --non-interactive --agree-tos -m "$EMAIL" || true

certbot certonly --webroot -w /var/www/html \
  -d spb.kim.agency \
  --non-interactive --agree-tos -m "$EMAIL" || true

# Полные конфиги с SSL (из репозитория)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cp "$SCRIPT_DIR/nginx/"*.conf /etc/nginx/sites-available/
for f in kimmy kimmy-seo kimmy-spb; do
  ln -sf "/etc/nginx/sites-available/${f}.conf" "/etc/nginx/sites-enabled/${f}.conf"
done

nginx -t
systemctl reload nginx
certbot renew --dry-run

echo "SSL готов"
