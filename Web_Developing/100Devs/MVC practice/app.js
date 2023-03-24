const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/db');

//Load config
dotenv.config({ path: './config/config.env'})

//passport config
require('./config/passport')(passport)

connectDB();

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

// Sessions
app.use(session({
    secret: 'test1',
    resave: false,
    saveUninitialized: false,
  }))

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Statis Folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))