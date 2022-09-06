const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// const seedDB = require('./seed');

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

//  database connection
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://MdDanish:0786786@cluster0.qfylmqm.mongodb.net/FPRT?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then( ()=>{
    console.log("DB is Connected successfully!!!")
})
.catch( (err) => {
    console.log("Something Went Wrong!!!")
    console.log(err.message);
})



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

app.listen(7200, () => {
    console.log('server runnig at port 7200');
})