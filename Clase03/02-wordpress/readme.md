# Wordpress

### Red

```
docker network create netwp -d bridge
```

### Volúmenes

```
docker volume create vol-wp-files
docker volume create vol-mysql-db
```

### MySQL

```
docker run -d --name servermysql \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=12345 \
    -e MYSQL_DATABASE=wpdb \
    -v vol-mysql-db:/var/lib/mysql \
    --network netwp \
    mysql:8
```

### Wordpress

```
docker run -d --name serverwp \
    -e WORDPRESS_DB_HOST=172.23.0.2:3306 \
    -e WORDPRESS_DB_USER=root \
    -e WORDPRESS_DB_PASSWORD=12345 \
    -e WORDPRESS_DB_NAME=wpdb \
    -p 9100:80 \
    -v vol-wp-files:/var/www/html \
    --network netwp \
    wordpress
```
