const express = require('express');
const appRouter = require('./routes/app');
const exphbs = require('express-handlebars');
const appConfig = require('./config/app');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = 3000;

let app = express();


app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended:false}));  // for forms
app.use(bodyParser.json());  // for json

// Register our router 
app.use('/', appRouter);

//  VISTAS: 
// Define la extensión a utilizar para los archivos de vistas
const extNameHbs = 'hbs';
// Instanciar de hbs con configuración + // Boilerplate
let hbs = exphbs.create({extname: extNameHbs})
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.listen(appConfig.express_port, ()=> {
    let msg = 'MVC App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')'
    console.log(msg);
})
