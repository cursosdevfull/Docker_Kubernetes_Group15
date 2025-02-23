# Usuarios

### Copiar
- Copiar copy "\\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.crt" "C:\Users\%USERNAME%\.kube\ca.crt"
- Copiar el certificado (crt) y la llave privada (key) en la carpeta ".kube"
- Ubicarnos en la carpeta .kube

### Crear usuario
```
kubectl config set-credentials curso15 --client-certificate=curso16.crt --client-key=curso16.key --embed-certs=true
```
