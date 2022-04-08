const mongoose = require('mongoose')
const Usuario = require('./usuario');

let Schema = mongoose.Schema


let tokenSchema = new Schema({
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    token: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now(),
        expires: 43200,
    }
})


module.exports = mongoose.model('token', tokenSchema) 

