require('dotenv').config(); // cargar variables de entorno en .env

// export an appConfig object
module.exports = {
    env: process.env.NODE_ENV || 'development',
    express_port: process.env.PORT || 3306,
}