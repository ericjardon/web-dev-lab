require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV || 'development',
    express_port: process.env.PORT || 3306,
}