const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const database = require('./config/keys.js').mongoURI;
const events = require('./routes/api/events');
const auth = require('./routes/auth/auth')
const index = require('./routes/index/index')
const passport = require('passport')
const session = require('express-session')


require('./config/passport')(passport)

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

// Mongoose
mongoose
    .connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("We are connected to the mongodb"))
    .catch(err => console.log(err));

// Routes
app.use('/', index)
app.use('/auth', auth)
app.use('/api/events', events);

app.set('views', __dirname + '/dummy_pages');
app.engine('html', require('ejs').renderFile);

app.listen(PORT, () =>  
    console.log("Server is running on Port: " + PORT) );
