# Redis

### Crear contenedor

```
docker run -d --name server-redis -p 6380:6379 redis:alpine
```

### Crear el cliente

```
docker run -d --name client-redis -p 8081:8081 -e REDIS_HOST=172.17.0.10 -e REDIS_PORT=6379 rediscommander/redis-commander
```

### Crear contenedor con contraseña

```
docker run -d --name server-redis -p 6380:6379 redis:alpine redis-server --requirepass todovale
```

### Crear el cliente

```
docker run -d --name client-redis -p 8081:8081 -e REDIS_HOST=172.17.0.10 -e REDIS_PORT=6379 -e REDIS_PASSWORD=todovale rediscommander/redis-commander
```
