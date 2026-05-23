# Автодеплой Kimmy (GitHub Actions → VPS)

При **push** в `master` / `main` GitHub подключается по SSH к серверу, делает `git pull`, `yarn build` и `pm2 restart` — без ручного захода на VPS.

## Что уже есть в репозиториях

В [kimmy](https://github.com/sitl-idnm/kimmy) и [Kimmy-spb](https://github.com/VLGKiwi/Kimmy-spb) лежит `.github/workflows/deploy.yml`. После обновления workflow вызывает `/opt/deploy/deploy.sh <имя-приложения>` вместо потерянного `/var/www/deploy.sh`.

## Быстрый старт на новом сервере

### 1. Скопировать скрипты на VPS

```bash
scp -r deploy/server root@YOUR_SERVER_IP:/tmp/kimmy-deploy
ssh root@YOUR_SERVER_IP
cd /tmp/kimmy-deploy
sudo bash bootstrap.sh
```

`bootstrap.sh` ставит Node 20, yarn, pm2, nginx, клонирует три репо в `/var/www/*` и делает первый билд.

### 2. DNS и SSL

A-записи на IP сервера:

| Домен |
|-------|
| `kim.agency`, `www.kim.agency` |
| `kim-agency.ru`, `www.kim-agency.ru` |
| `spb.kim.agency` |

Затем:

```bash
nginx -t && systemctl reload nginx
apt install -y certbot python3-certbot-nginx
certbot --nginx -d kim.agency -d www.kim.agency
certbot --nginx -d kim-agency.ru -d www.kim-agency.ru
certbot --nginx -d spb.kim.agency
```

### 3. Секреты GitHub (в каждом из трёх репо)

**Settings → Secrets and variables → Actions → New repository secret**

| Secret | Значение |
|--------|----------|
| `SSH_HOST` | IP или домен сервера |
| `SSH_USER` | `root` или отдельный deploy-пользователь |
| `SERVER_SSH_KEY` | приватный SSH-ключ (полностью, с `-----BEGIN...`) |

Сгенерировать ключ на сервере:

```bash
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions -N ""
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/github_actions   # это в SERVER_SSH_KEY
```

### 4. Запушить обновлённые workflow

После мержа workflow в репо — любой push в основную ветку запустит деплой.

## Порты и пути

| Сайт | Домен | Репозиторий | Ветка | Путь на сервере | PM2 | Порт |
|------|-------|-------------|-------|-----------------|-----|------|
| Kimmy | [kim.agency](https://kim.agency) | sitl-idnm/kimmy | master | `/var/www/kimmy` | kimmy | 3000 |
| SEO | [kim-agency.ru](https://kim-agency.ru) | sitl-idnm/Kimmy-SEO | master | `/var/www/kimmy-seo` | kimmy-seo | 3001 |
| SPB | [spb.kim.agency](https://spb.kim.agency) | VLGKiwi/Kimmy-spb | main | `/var/www/kimmy-spb` | kimmy-spb | 3002 |

Ручной деплой одного приложения:

```bash
/opt/deploy/deploy.sh kimmy
/opt/deploy/deploy.sh kimmy-seo
/opt/deploy/deploy.sh kimmy-spb
```

## Почему не Docker

Docker имеет смысл, если нужны изолированные окружения или несколько серверов. Для трёх Next.js на одном VPS **GitHub Actions + pm2 + nginx** проще: меньше RAM, привычный `pm2 logs`, быстрее поднять после смерти сервера. Docker-вариант можно добавить позже через `output: 'standalone'` в `next.config.mjs`.

## Private-репозитории

Если репо приватные, на сервере настрой deploy key в GitHub и клонируй по SSH:

```bash
git clone git@github.com:sitl-idnm/kimmy.git /var/www/kimmy
```
