## Manejo de Vistas

Para que un servicio tenga respuestas no solo con texto, si no con páginas web, imágenes, videos, etc, se requirere un **view engine**.

Existen varios motores (pug, jinja, EJS etc.) En este ejercicio usamos [*Handlebars*](https://www.npmjs.com/package/express-handlebars), que es un módulo de express.

### HandleBars
```
// Configuraciones de las vistas
let exphbs = require('express-handlebars');
// Define la extensión que se va a utilizar para los archivos que representan
// las vistas
const extNameHbs = 'hbs';
// Crea una instancia de hbs con las conifugraciones definidas
let hbs = exphbs.create({extname: extNameHbs});
// Establece el uso de handlebars dentro de express.js
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);
```

Require un solo archivo conocido como el "layout".
El layout establece elementos comunes entre _todas_ las vistas.

Si lo que queremos es lograr que nuestro controlador responda una respuesta en html, tenemos que crear la vista que va a responder nuestro controlador.

En una carpeta `pages` creamos todos los archivos html necesarios, los cuales son el contenido que sustituye `{{body}}` adentro de un archivo en `layouts`.

Para responder con un view en express, usamos el metodo `res.render('pages/name')`, sin extensión


### Knex.js
[Knex](http://knexjs.org/) es un módulo para construir y ejecutar queries para las bases de datos relacionales más comunes: Postgres, MySQL, MariaDB, SQLite3, entre otros.

Lo instalaremos globalmente en la máquina: `npm i -g knex`
Para nuestra app los instalamos como dependencias: `npm i mysql2 knex`
Una vez instalados debemos correr `knex init`,
y después generar las variables de ambiente necesarias, éstas dependerán de la máquina donde se está corriendo la aplicación (si se trata de una base de datos local).

Procedimiento:
1. Instalar MySQL Community Server (zip)
2. Extraer el zip y Añadir el directorio `bin` al PATH de usuario
3. Crear un archivo `my.init` especificando basedir y datadir (debe ir en el mismo directorio donde está mysql)
```
[mysqld]
# set basedir to your installation path
basedir=C:/Users/a01376748/Documents/mysql-8
# set datadir to the location of your data directory
datadir=C:/Users/a01376748/Documents/mydata

skip-ssl=1
```

4. El método zip no inicializa un directorio para la data. Hemos de seguir los pasos de aquí [Data Directory Initialization](https://dev.mysql.com/doc/refman/8.0/en/data-directory-initialization.html#data-directory-initialization-overview)

Se debe incializar `bin\mysqld --defaults-file=C:\path\to\my.ini
   --initialize --console`
O simplemente `mysqld --initialize-insecure --console`.
* nota, insecure simplemente crea una cuenta sup sin contraseña.
El servidor por defecto crea una cuenta `'root'@'localhost'`

Si hay error por la existencia de un directorio `data` simplemente bórralo.

5. CORRER el servidor de MySQl
`mysqld --console`

Para poder correrlo como un servicio (se enciende y se apaga con el sistema operativo), necesitamos privilegios de admin.

para DETENER el servicio:
`mysqladmin -u root shutdown -p`, más la contraseña, o sin -p si no hay contraseña

6. Conectarse al servidor instalado:
`mysql -u root --skip-password`
`mysql -u root -p`
Y asignar una contraseña nueva: `ALTER USER 'root'@'localhost' IDENTIFIED BY 'root-password';`

7. Creamos un archivo `database/connection.js` donde instanciamos knex y lo conectamos a la base de datos según la variable de entorno sea "production" o "development".

8. Creamos nuestra primera migración (secuencia de operaciones de esquema ejecutadas en la base de datos). `knex migrate:make create_products_table`
Ejemplo:
```A01376748@CCMCDT209-21 MINGW64 ~/Documents/web-dev-lab/a2-mvc (main)
$ knex migrate:make create_products_table
Using environment: development
Using environment: development
Using environment: development
Created Migration: C:\Users\a01376748\Documents\web-dev-lab\a2-mvc\migrations\20220226000403_create_products_table.js
```

En un archivo de migración tenemos dos funciones "up" (las modificaciones a la base de datos) y "down" (operaciones que revierten las modificaciones de up).
Seguimiento: https://github.com/luisjglz/TC3052-202211/tree/main/Actividad02

### Generar seeds para insertar datos
`knex seed:make 01_products`
Una seed es un archivo que corre para insertar o crear registros en la base de datos. Es como un 'commit' a la base de datos.

Para correr una seed en la base de datos:
`knex seed:run`
