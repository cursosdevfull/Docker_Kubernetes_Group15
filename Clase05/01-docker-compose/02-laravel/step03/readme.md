# Laravel

### Crear proyecto de laravel usando composer
```
docker compose run --rm composer create-project --prefer-dist laravel/laravel .
```

### Migration con artisan
```
docker compose run --rm artisan migrate
```

### Instalar dependencias para el frontend
```
docker compose run --rm npm install bootstrap
```