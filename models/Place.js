const mongoose = require('mongoose')

const PlaceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    address: {
        type: String    
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Place', PlaceSchema)