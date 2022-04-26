require('dotenv').config()
const mongoose = require('mongoose')
const assert = require('assert');
const Bicicleta = require('../models/bicicleta')

const request = require('request');
const BASE_URL = 'http://localhost:3000/api/bicicletas/'

describe('Bicicletas API', function () {

    beforeEach(function(done){
        var mongoDB = process.env.MONGODB_CONNECTION
        mongoose.connect(mongoDB, {useNewUrlParser: true})

        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error'))
        db.once('open', function(){
            done()
        })
    })

    afterEach(function(done){
        // Limpiar la base de datos completa
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err)
            const db = mongoose.connection
            db.close()
            done()
        })
    })

  describe('API GET /bicicletas', function () {
    it('should return a JSON list of all bycicles', function (done) {
        request.get(BASE_URL, function(error, response, body) {
            let res = JSON.parse(body)
            //expect(response.statusCode).toBe(200)
            assert.equal(response.statusCode, 200);
            let bicis_num = res.bicicletas.length;
            assert.equal(res.bicicletas.length, 0);
            done()
        })
    });
  });
});