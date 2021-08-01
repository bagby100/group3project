const mongoose = require('mongoose');
var petSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    dateArrived: {
        type: Date,
    },
    Species: {
        type: String,
    },
    Breed: {
        type: String,
    },
    Weight: {
        type: Number,
    },
    Color: {
        type: String,
    },
    Sex: {
        type: String,
    },
    Location: {
        type: String,
    },
    Description: {
        type: String,
    }
});

mongoose.model('pets', petSchema);