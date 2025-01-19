# Postgres

### Crear el contenedor

```
docker run -d --name server-postgres -e POSTGRES_PASSWORD=12345 postgres:14.15-alpine3.21
```

### Crear el cliente

```
docker run -d --name client-postgres --env-file environment-variables.txt -p 8100:80 dpage/pgadmin4:8
```
