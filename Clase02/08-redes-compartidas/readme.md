# Redes compartidas

### Crear Redes

```
docker network create net-01 -d bridge
docker network create net-02 -d bridge
```

### Contenedores

```
docker run -d --name server01 nginx:alpine
docker run -d --name server02 nginx:alpine
docker run -d --name server03 nginx:alpine
```

### Unión a las Redes

```
docker network connect net-01 server01
docker network connect net-01 server02
docker network connect net-02 server03
docker network connect net-02 server02
```
