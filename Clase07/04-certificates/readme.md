# Certificados

### Crear la llave privada
```
openssl genrsa -out curso16.key 2048
```
### Crear la solicitud
```
openssl req -new -key curso16.key -out curso15.csr  -subj "/CN=curso16/O=developers"
```

### Generar el certificado final
```
openssl x509 -req -in curso16.csr -CA \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.key -CAcreateserial -out curso16.crt -days 365
```
