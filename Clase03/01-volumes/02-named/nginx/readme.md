# NGINX - Volúmen de tipo named

### Crear un volúmen nombrado

```
docker volume create vol-nginx01
```

### Listar volúmenes nombrados y anónimos

```
docker volume ls
```

### Inspeccionar un volúmen

```
docker volume inspect <nombre volumen>
```

### Crear un contenedor con un volúmen

```
docker run -d --name server-nginx01 -v vol-nginx01:/usr/share/nginx/html -p 8080:80 nginx:alpine
```
