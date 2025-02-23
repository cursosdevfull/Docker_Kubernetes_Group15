# Contexto

### Listar
```
kubectl config view
```

### Cambiar de contexto
```
kubectl config use-context <nombre del contexto>
```

### Crear un contexto
```
kubectl config set-context curso16-ctx --cluster=docker-desktop --user=curso16 --namespace=ns-qas
```

### Verificar la configuración
```
kubectl config view --minify
```