# Redes

### Crear una red de tipo bridge

```
docker network create <nombre de la red> -d bridge
```

### Para inspeccionar

```
docker network inspect <nombre de la red>
```

### Para crear un red con subnet y gateway

```
docker network create <nombre de la red> -d bridge --subnet <subnet> --gateway <gateway>
```

### Listar redes

```
docker network ls
```

### Crear un contenedor con red

```
docker run -d --name server-nginx01 --network net-02 nginx:alpine
docker run -d --name server-nginx02 --network net-02 nginx:alpine
docker run -d --name server-nginx03 --network net-02 --ip 140.10.12.10  nginx:alpine
docker run -d --name server-nginx04 --network net-02 nginx:alpine
```

### Conectar un contenedor a una red

```
docker network connect <nombre o id de la red> <nombre del contenedor>
```

### Desconectar un contenedor a una red

```
docker network disconnect <nombre o id de la red> <nombre del contenedor>
```
