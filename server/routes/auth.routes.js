const express = require('express');
const authRoutes = express.Router();

const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const Dish = require('../models/Dish');

authRoutes.post('/signup', (req, res, next) => {

    console.log("------ PAYLOAD EN DESTINO -----", req.body)
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    if (!username || !password || !email) {
        console.log("Input vacio")
        res.status(400).json({ message: 'Escribe un nombre de usuario, email y contraseña' });
        return;
    }

    if (password.length < 7) {
        console.log("contraseña corta")
        res.status(400).json({ message: 'Por favor, escribe una contraseña de mínimo 8 caracteres.' });
        return;
    }

    User.findOne({ username }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: "Check del usuario fue mal" });
            return;
        }

        if (foundUser) {
            console.log("usuario ya existe")
            res.status(400).json({ message: 'Nombre de usuario ya existente, ¡elige otro!' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new User({
            username: username,
            password: hashPass,
            email: email
        });

        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Error al guardar en la database.' });
                return;
            }

            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login despues signup fue mal.' });
                    return;
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});


authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});


authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});


authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});


authRoutes.get('/profile/:id', (req, res, next) => {
    User.find({ _id: req.params.id })
        .populate('favDishes.dish')
        .then(userFound => res.status(200).json(userFound))
})



module.exports = authRoutes;