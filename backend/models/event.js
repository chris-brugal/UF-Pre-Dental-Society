const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//title
//description
//time
//location
//image
//link
//postDate

const EventSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    time:{
        type: Date,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    link:{
        type: String,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', EventSchema);
