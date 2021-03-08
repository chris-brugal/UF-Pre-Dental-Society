const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const database = require('./config/keys.js').mongoURI;
const events = require('./routes/api/events');


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("We are connected to the mongodb"))
    .catch(err => console.log(err));

app.use('/api/events', events);

app.listen(PORT, () =>  
    console.log("Server is running on Port: " + PORT) );






