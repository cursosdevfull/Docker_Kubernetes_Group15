# NGINX - Volúmen Host

### Crear un contenedor con un volúmen

```
docker run -d --name server-nginx01 -v $(pwd -W)/www:/app -v $(pwd -W)/configuration/nginx.conf:/etc/nginx/conf.d/default.conf -p 8080:80 nginx:alpine
```

### Crear un contenedor con un volúmen de solo lectura

```
docker run -d --name server-nginx01 \
       -v $(pwd -W)/www:/app \
       -v $(pwd -W)/configuration/nginx-www.conf:/etc/nginx/conf.d/default.conf:ro \
       -p 7000:5000 \
       nginx:alpine
```
