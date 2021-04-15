const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Route constants
const events = require('./routes/api/events');
const officers = require('./routes/api/officers');
const auth = require('./routes/auth/auth')
const index = require('./routes/index/index')

const database = require('./config/keys.js').mongoURI;

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
    secret: 'password',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore ({ mongooseConnection: mongoose.connection })
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
app.use('/api/officers', officers)

app.set('views', __dirname + '/dummy_pages');
app.engine('html', require('ejs').renderFile);

app.listen(PORT, () =>  
    console.log("Server is running on Port: " + PORT) );
