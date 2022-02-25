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