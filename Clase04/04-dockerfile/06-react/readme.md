# React

### Crear la imagen

```
docker build -f appsimple/dockerfile -t appnodejs:v4 .
```

### Crear el contenedor

```
docker run -d --name server-react -p 8200:80 appnodejs:v4
```
