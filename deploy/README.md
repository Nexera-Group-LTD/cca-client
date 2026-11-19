# CCA web deployment

This directory deploys only the CCA web client. The control application, API/server, and gateway use their own deployment projects.

| Environment | Public domain | Private host port | Deployment folder |
| --- | --- | --- | --- |
| Staging | `staging.cca.nexeragroup.rw` | `10611` | `/home/yves/cca/staging/web` |
| Production | `cca.rw` | `10601` | `/home/yves/cca/prod/web` |

The SSR container listens on port `4200` and is bound only to `127.0.0.1`. Nginx terminates TLS and proxies the public host to the matching local port. Production redirects `www.cca.rw` to `cca.rw`.

## Server setup

Install the corresponding Nginx configuration from `deploy/nginx/` in `/etc/nginx/sites-available/`, enable it from `sites-enabled/`, provision the listed Let's Encrypt certificate, run `nginx -t`, and reload Nginx.

The GitHub environments `staging` and `production` require the environment-scoped secrets `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PORT`, `DEPLOY_SSH_KEY`, and `DEPLOY_KNOWN_HOSTS`. `DEPLOY_KNOWN_HOSTS` must contain the server's verified SSH host key.

## Deployment

Pushing the `staging` branch deploys staging. Pushing the `production` branch deploys production. Each workflow creates `web`, `logs`, and `data` folders, creates the external Docker network if necessary, synchronizes the client, runs Docker Compose, then checks the HTTPS endpoint.

For a manual server deployment:

```sh
docker compose --env-file deploy/.env.staging -f deploy/compose.staging.yml up -d --build
docker compose --env-file deploy/.env.production -f deploy/compose.prod.yml up -d --build
```

The web client calls `https://staging-api.cca.nexeragroup.rw/api/v1` in staging and `https://api.cca.rw/api/v1` in production. The API must explicitly allow the corresponding web origin through CORS.
