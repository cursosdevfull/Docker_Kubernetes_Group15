# NGINX - Volúmen de tipo host

### Crear un contenedor con un volúmen

```
docker run -d --name server-nginx01 -v $(pwd -W)/www:/usr/share/nginx/html -p 8080:80 nginx:alpine
```
