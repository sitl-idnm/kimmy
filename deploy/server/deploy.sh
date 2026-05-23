#!/usr/bin/env bash
# /opt/deploy/deploy.sh <kimmy|kimmy-seo|kimmy-spb>
set -euo pipefail

APP="${1:?usage: deploy.sh kimmy|kimmy-seo|kimmy-spb}"

case "$APP" in
  kimmy)
    APP_DIR="/var/www/kimmy"
    BRANCH="master"
    PM2_NAME="kimmy"
    PORT="3000"
    ;;
  kimmy-seo)
    APP_DIR="/var/www/kimmy-seo"
    BRANCH="master"
    PM2_NAME="kimmy-seo"
    PORT="3001"
    ;;
  kimmy-spb)
    APP_DIR="/var/www/kimmy-spb"
    BRANCH="main"
    PM2_NAME="kimmy-spb"
    PORT="3002"
    ;;
  *)
    echo "Unknown app: $APP" >&2
    exit 1
    ;;
esac

if [[ ! -d "$APP_DIR/.git" ]]; then
  echo "Repo not found at $APP_DIR — run bootstrap.sh first" >&2
  exit 1
fi

export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
export NODE_ENV=production
export PORT="$PORT"

cd "$APP_DIR"

echo "==> [$PM2_NAME] fetch origin/$BRANCH"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> [$PM2_NAME] install dependencies"
yarn install --frozen-lockfile

echo "==> [$PM2_NAME] build"
yarn build

echo "==> [$PM2_NAME] restart pm2"
if pm2 describe "$PM2_NAME" >/dev/null 2>&1; then
  pm2 restart "$PM2_NAME" --update-env
else
  pm2 start /opt/deploy/ecosystem.config.cjs --only "$PM2_NAME"
fi

pm2 save
echo "==> [$PM2_NAME] done"
