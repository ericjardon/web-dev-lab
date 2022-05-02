const Reserva = require('../models/reserva')

exports.create_get = function (req, res) {
    res.render('reservas/create')
}

exports.delete = async function(req, res, next) {

    if (!req.user) {
        console.log("Not authenticated");
        res.redirect('/usuarios/login');
        return;
    }

    const {id} = req.params;
    console.log("Deleting reserva", id);
    try {
        await Reserva.findByIdAndDelete(id)
        return res.redirect('/');
    } catch (e) {
        console.error(e);
        return res.status(500).redirect('/');
    }
}

