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
    postDate:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('event', EventSchema);
