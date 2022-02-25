## Manejo de Vistas

Para que un servicio tenga respuestas no solo con texto, si no con páginas web, imágenes, videos, etc, se requirere un **view engine**.

Existen varios motores (pug, jinja, etc.) En este ejercicio usamos [*Handlebars*](https://www.npmjs.com/package/express-handlebars), que es un módulo de express.

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

