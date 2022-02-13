const express = require('express');
const path = require('path');
const { engine  } = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// Initializations
const app = express();
require('./database');
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 4000); 
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',                                    
    layoutsDir: path.join(app.get('views'), 'layouts'),       
    partialsDir: path.join(app.get('views'), 'partials'),      
    extname: '.hbs'
}))
app.set('view engine', '.hbs') 

// Middlewares  
app.use(express.urlencoded({extended: false})); 
app.use(methodOverride('_method'));
app.use(session({       
    secret: 'elChispoSecret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables 
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

// Routes 
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server Init 
app.listen(app.get('port'), () => {
    console.log(`#############################`);
    console.log(`Server listening on port ${app.get('port')}`);
    console.log(`#############################`);
})
