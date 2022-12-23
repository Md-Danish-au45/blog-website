const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const {initDB} = require("./dbConfig")
const dotenv = require("dotenv")
mongoose.set('strictQuery', true);
dotenv.config({path:"./.env"})


// routes
const blogRoutes = require('./routes/blogs')
const authRoutes = require('./routes/auth');

const session = require('express-session');
const flash = require('connect-flash');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

// Initialising the passport and sessions for storing the users info

app.use(passport.initialize());
app.use(passport.session());



// configuring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// DATAbase
initDB()



app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})


app.get('/', (req, res) => {
        res.render('./blogs/cover')
    })

app.use(blogRoutes);
app.use(authRoutes);

const port = process.env.PORT || 7200
app.listen(port,() =>{
    console.log(`listening to port ${port}.....`)
})
