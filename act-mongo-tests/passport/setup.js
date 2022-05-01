const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario')
const passport = require('passport')
const LocalStrategy = require('passport-local');

// returns the user id, provided the user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// returns the user or an error, provided the id
passport.deserializeUser((id, done) => {
    Usuario.findById(id, (err, user) => {
        done(err, user);
    })
})


/* 
Our strategy handles both registration and log in in a single endpoint, with the
caveat of dropping the mandatory 'name' field upon User Document creation.
*/
passport.use(
    new LocalStrategy({
        usernameField: 'email'
    }, (email, password, done) => {
        // Match a user
        Usuario.findOne({email: email})
        .then(user => {
            
            if (!user) {  // user doesn't exist, create a new user
                const newUser = new Usuario({email, password});
                // Hash password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if (err) throw err;
                        // Store user with hashed password
                        newUser.password = hash;

                        newUser.save()
                        .then(user => {
                            return done(null, user);
                        })
                        .catch(err => {
                            return done(null, false, {message: err});
                        })
                    })
                });
            }  // else, return existing user
            else {
                bcrypt.compare(password, user.password, (err, success) => {
                    if (err) throw err;

                    if (sucess) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Wrong password"})
                    }
                });
            }
        })
        .catch(err => {
            return done(null, false, {message: err});
        })
    })
)


module.exports = passport;