# Healthcheck MySQL

### Crear un contenedor de mysql con healthcheck

```
docker run -d \
    --name server-mysql \
    --health-cmd="mysqladmin ping -h localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-start-period=5s \
    --health-timeout=10s \
    -e MYSQL_ROOT_PASSWORD=12345 \
    mysql:8
```
