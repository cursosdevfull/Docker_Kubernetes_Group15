kubectl exec -it deploy-backend-<pod-hash> -- sh

curl -k https://kubernetes.default.svc/api/v1/namespaces/default/pods \
  -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)"

curl -k -X DELETE https://kubernetes.default.svc/api/v1/namespaces/default/pods/deploy-backend-847d88c95-vgljx \
  -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" 


# Listar ConfigMaps
curl -k https://kubernetes.default.svc/api/v1/namespaces/default/configmaps \
  -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)"

# Dentro del pod
apk add --no-cache curl
wget https://storage.googleapis.com/kubernetes-release/release/v1.21.0/bin/linux/amd64/kubectl
chmod +x kubectl
mv kubectl /usr/local/bin/

# Ahora podemos usar kubectl directamente
kubectl get pods
kubectl delete pod deploy-backend-<pod-hash>  # Esto debería fallar   