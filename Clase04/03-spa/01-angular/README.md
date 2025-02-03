# Angular

### Crear el contenedor

```
docker run -d `
    --name server-angular `
    --publish published=8888,target=80 `
    --mount type=bind,source=${PWD}/dist/01-angular/browser,target=/usr/share/nginx/html `
    nginx:alpine
```

```
docker run -d \
    --name server-angular \
    --publish published=8888,target=80 \
    --mount type=bind,source=$(pwd -W)/dist/01-angular/browser,target=/usr/share/nginx/html \
    nginx:alpine
```
