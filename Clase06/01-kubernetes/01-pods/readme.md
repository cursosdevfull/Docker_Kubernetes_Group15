# Pods

### Listar recursos de Kubernetes
```
kubectl api-resources
```

### Para ejecutar un manifiesto
```
kubectl apply -f 01-pod.yml
```

### Para listar pods
```
kubectl get pods
kubectl get po
```

### Para eliminar un manifiesto
```
kubectl delete -f 01-pod.yml
```

### Para eliminar un pod
```
kubectl delete po pod-nginx
```

### Describir un pod
```
kubectl describe po pod-nginx-sonarqube
```

### Visualizar los logs
```
kubectl logs pod-nginx-sonarqube
kubectl logs pod-nginx-sonarqube -c sonarqube
```

### Ingresar a contenedor
```
kubectl exec -it pod-nginx-sonarqube -- sh
kubectl exec -it pod-nginx-sonarqube -c sonarqube -- sh
```

### Visualizar el manifiesto de un pod
```
kubectl get po pod-nginx-sonarqube -o yaml
```

### Listar pod con sus etiquetas
```
kubectl get po --show-labels
```

### Filtrar pods por etiquetas
```
kubectl get po -l env=dev
```

### Port forward
```
kubectl port-forward deploy-backend-85897c7468-xsnln 7000:8082
```