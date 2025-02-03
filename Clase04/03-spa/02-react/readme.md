# React

### Crear el contenedor

```
docker run -d `
    --name server-react `
    --publish published=8000,target=80 `
    --mount type=bind,source=${PWD}/dist,target=/usr/share/nginx/html `
    nginx:alpine
```

```
docker run -d \
    --name server-react \
    --publish published=8000,target=80 \
    --mount type=bind,source=$(pwd -W)/dist,target=/usr/share/nginx/html \
    nginx:alpine
```
