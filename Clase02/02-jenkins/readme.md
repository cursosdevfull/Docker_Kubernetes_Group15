# Jenkins

### Crear un contenedor

```
docker run -d --name server-jenkins -p 8080:8080 -p 50000:50000 --restart=on-failure jenkins/jenkins:lts-jdk17
```

### Para "acceder" al contenedor

```
docker exec -it server-jenkins sh
```
