# Healthcheck Nginx

### Crear un contenedor de nginx con healthcheck

```
docker run -d \
    --name server-nginx \
    --health-cmd="curl http://localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-start-period=5s \
    --health-timeout=10s \
    nginx:alpine
```
