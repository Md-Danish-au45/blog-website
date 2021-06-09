const express = require('express');
const routes = express.Router();
const User = require('../models/user');
const passport = require('passport');


// routes.get('/fakeUser', async(req,res)=>{
//     const user = new User({ email: 'sabeel@gmail.com',username:'sabeel' });
//         const newUser = await User.register(user, 'sabeel12');
//         res.send(newUser);
// })

// Get the signup form
routes.get('/register', async (req, res) => {
    res.render('auth/signup');
})

routes.post('/register', async (req, res) => {

    try {
       const user = new User({ username: req.body.username, email: req.body.email });
       const newUser = await User.register(user, req.body.pass);
       req.flash('success', 'Registered Successfully');
       res.redirect('/login');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register')
        // console.log(e.message);
    }
    
});

// Get the login form
routes.get('/login', async (req, res) => {
    
    res.render('auth/login')
})

routes.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }
    ), (req, res) => {
        req.flash('success', `Welcome Back!! ${req.user.username}`)
        res.redirect('/blogs');
});

// Logout the user from the current session
routes.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged Out Successfully');
    res.redirect('/login');
})


module.exports = routes;