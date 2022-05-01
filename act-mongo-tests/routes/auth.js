var express = require('express');
const passport = require('passport');
var router = express.Router();


router.post("/register_login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return res.status(401).send({ errors: err })
        }

        if (!user) {
            return res.status(400).send({ errors: "No user found" })
        }

        // try logging in
        req.logIn(user, function (err) {
            if (err) {
                return res.status(401).send({ errors: err })
            }

            return res.status(200).send({
                success: `Iniciaste como ${user.id}`  // what is .id?
            })
        })

    })(req, res, next); // pass request to the next middleware
})


module.exports = router;