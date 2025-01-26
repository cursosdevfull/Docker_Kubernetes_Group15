# Redis - Volumen anónimo

### Crear un contenedor con un volumen anónimo

```
docker run -d --name server-redis -v /data redis:alpine
```

### Cliente de Redis

```
docker run -d --name client-redis -p 8081:8081 -e REDIS_HOST=172.17.0.8 rediscommander/redis-commander
```

### Para eliminar un contenedor con un volumen anónimo

```
docker rm -fv server-redis
```
