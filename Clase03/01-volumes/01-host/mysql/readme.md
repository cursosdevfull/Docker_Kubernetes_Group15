# MySQL - Volúmen de tipo host

### Crear un contenedor con un volúmen usando una ruta absoluta

```
docker run -d --name server-mysql02 -v D:\\Cursos\\Docker_Kubernetes_Group15\\Clase03\\01-volumes\\01-host\\mysql\\data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=12345 mysql:8
```

### Crear un contenedor con un volúmen usando una ruta relativa (Git Bash)

```
docker run -d --name server-mysql02 -v $(pwd -W)/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=12345 mysql:8
```

### Crear un contenedor con un volúmen usando una ruta relativa (Bash, SH)

```
docker run -d --name server-mysql02 -v $(pwd)/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=12345 mysql:8
```

### Crear un contenedor con un volúmen usando una ruta relativa (Powershell)

```
docker run -d --name server-mysql02 -v ${PWD}/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=12345 mysql:8
```
