## Web APP de Administrador de Tareas por Usuarios

## Instalación del backend Rest API en Laravel

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

---

## Instalación del Frontend con Vuejs

## Como ejecutarlo:

# 1- Copiar archivo .env
cp .env.example .env

# 2- Instalar dependencias
npm install

# 6- Inicia dev server
npm run serve