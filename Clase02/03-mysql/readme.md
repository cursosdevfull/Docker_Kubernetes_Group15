# MySQL

### Crear un contenedor

```
docker run -d --name server-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=cursodocker -e MYSQL_USER=user -e MYSQL_PASSWORD=elgigante mysql:8
```

### Revisar el log

```
docker logs server-mysql
```

### Crear un contenedor cliente

```
docker run -d --name client-mysql -p 8090:80 -e PMA_ARBITRARY=1 phpmyadmin:5.2.1
```
