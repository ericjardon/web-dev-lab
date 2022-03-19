
let appConfig = require('../configs/app');  // environment and port setup

// Importa el archivo knexfile.js
const knexfile = require('../knexfile.js');

// Obtiene los datos de configuración dependiendo 'production' o 'development' en el ENV
// con esos datos de configuración crea una instancia de knex
console.log('connecting with');
console.dir(knexfile[appConfig.env]);
const knex = require('knex')(knexfile[appConfig.env]);

module.exports = knex