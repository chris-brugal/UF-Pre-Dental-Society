const path = require ('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Route constants
const events = require('./routes/api/events');
const officers = require('./routes/api/officers');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth')

const database = require('./config/keys.js').mongoURI;
const { ensureIndexes } = require('./models/Event');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Mongoose
mongoose
    .connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("We are connected to the mongodb"))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', auth)
app.use('/api/events', events);
app.use('/api/officers', officers)
app.use('/api/users', users)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..','client', 'build', 'index.html'));
    });
  }

app.listen(PORT, () =>  
    console.log("Server is running on Port: " + PORT) );
