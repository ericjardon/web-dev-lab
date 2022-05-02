# Laboratorio de Desarrollo Web
### Eric Jardón Chao

# Actividad 06: Easy Bici (4 de mayo de 2022)

¡Hola! El proyecto se encuentra en `/act-mongo-tests`.

Incluye:
1. Pruebas Unitarias con mocha y jasmine
2. Autenticación Multifactor con passport.js y mailer.js
3. Persistencia a Mongo DB Atlas con bases de prueba y de producción.

Para correr las pruebas unitarias:
```
npm i
npm run test_server
npm run mochatest
```

Para correr el proyecto en el navegador,
instala dependencias con `npm i`
ejecuta con `npm run start`

**Nota**: el proyecto requiere de un archivo `.env` en el directorio para correr.
Si no lo tiene, favor de solicitarlo a mi correo.
# Actividad 05 (23 de marzo 2022)

¡Hola! El proyecto se encuentra en `/bikes-api`.
Desde este directorio:
```
npm i
knex migrate:latest
knex seed:run
npm run devstart
```
Se dejaron valores default para variables de entorno dentro de `/bikes-api/knexfile.js` y `/bikes-api/configs/app`.
Se asume una base de datos "redbicicletas", con usuario y contraseña root:root

El proyecto corre en el puerto 3000.

# Actividad 01


Calculadora con operaciones básicas y memoria a una operación anterior (ANS).

Desde la raíz del proyecto:
```
cd a1-calculator
npm i
node index
```
