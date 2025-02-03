# Restart

### Nunca reiniciar

```
docker run -d --name server-nginx --restart=no nginx:alpine
docker run -d --name server-nginx --restart=no nginx:alpine sh -c "cat archivo_no_existe"
```

### Se reinicia en caso haya una falla

```
docker run -d --name server-nginx --restart=on-failure nginx:alpine sh -c "exit 1"
```

### Se reinicia siempre a menos que se lo detenga manualmente

```
docker run -d --name server-nginx --restart=unless-stopped nginx:alpine sh -c "sleep 10; exit 1"
```

### Se reinicia siempre

```
docker run -d --name server-nginx --restart=always nginx:alpine sh -c "sleep 10; exit 1"
```
