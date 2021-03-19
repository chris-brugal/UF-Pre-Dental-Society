const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OfficerSchema = new Schema({
    displayName:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    rank:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Officer', OfficerSchema);
