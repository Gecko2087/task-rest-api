# Rest API

Rest API backend con Laravel

## Como ejecutarlo:
```bash

# 1- Instalar dependencias
composer install

# 2- Copiar archivo .env
cp .env.example .env

# 3- Conectar tu DB
Configura los parametros en .env

# 4- Genera el app key
php artisan key:generate

# 5- Ejecuta las migraciones con seeder
php artisan migrate --seed

# 6- Inicia dev server
php artisan serve
```
