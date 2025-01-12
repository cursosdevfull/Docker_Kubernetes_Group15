# Contenedor

### Crear

```
docker create <nombre de la imagen>:<versión o tag de la imagen>
docker create --name <nombre contenedor> <nombre de la imagen>:<versión o tag de la imagen>
```

### Listar contenedores que se están ejecutando

```
docker ps
```

### Listar contenedores

```
docker ps -a
```

### Iniciar un contenedor

```
docker start <nombre contenedor | id>
```

### Detener un contenedor

```
docker stop <nombre contenedor | id>
```

### Eliminar un contenedor

```
docker rm <nombre contenedor>
docker rm -f <nombre contenedor>
```

### Crear un contenedor usando run

```
docker run <nombre imagen>:<versión o tag de la imagen>
docker run -d <nombre imagen>:<versión o tag de la imagen>
```

### Crear un contenedor con nombre

```
docker run -d --name <nombre contenedor> <nombre imagen>:<versión o tag de la imagen>
```

### Mapeo de puertos

```
docker run -d --name <nombre contenedor> -p <puerto host>:<puerto container> <nombre imagen>:<versión o tag de la imagen>

```

### Inspeccionar un contenedor

```
docker inspect <nombre contenedor>
```
