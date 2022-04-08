const Usuario = require('../models/usuario');

exports.list = function (req, res, next)  {
    Usuario.find().then(
        usuarios => {
            res.render('usuarios/index', {usuarios})
        }
    )
    .catch( err => {
        console.error('Algo salió mal: ', err);
    });
}

exports.update_GET = function (req, res, next) {
    const { id } = req.params;
    Usuario.findById(id).then(
        usuario => {
            res.render('usuarios/update', {usuario, errors:{}});
        }
    )
    .catch(err => {
        console.error(
            "valió:", err
        )
    })
}

exports.update = function(req, res, next) {
    const {nombre} = req.body;

    Usuario.findByIdAndUpdate(id, {nombre})
    .then(result => {
        // redirect
        console.log("update result", result)
        res.redirect('/usuarios')
        return;
    })
    .catch(err => {
        res.render('usuarios/update', {errors: err.errors, usuario: new Usuario({nombre})})
        return;
    })
}

exports.create_GET = function (req, res, next) {
    res.render('usuarios/create', {errors:{}, usuario: new Usuario()});
}

exports.create = function(req, res, next){
    if(req.body.password != req.body.confirm_password){
        res.render('usuarios/create', {errors: {confirm_password: {message: 'No coinciden los passwords '}},  usuario: new Usuario({nombre: req.body.nombre, email: req.body.email }) })
        return
    }
    Usuario.create({ nombre: req.body.nombre, email: req.body.email, password: req.body.password }, function(err, nuevoUsuario) {
        if(err){
            res.render('usuarios/create', {errors: {email: {message: 'Ya existe un usuario con ese password'}}, usuario: new Usuario({nombre: req.body.nombre, email: req.body.email })})
        }
        else{
            nuevoUsuario.enviar_mail_bienvenida() // TODO, REGISTRADO PERO NO verified
            res.redirect('/usuarios')
        }
    })
}

exports.delete = function(req, res, next) {
    const {id} = req.params;
    Usuario.findByIdAndDelete(id)
    .then(res => {
        res.redirect('/usuarios');
    })
    .catch(err => {
        next(err);
    })
}