const mongoose = require('mongoose')

const Flight = mongoose.model (
    "Flight",
    new mongoose.Schema({
        name: String,
        from: String,
        to: String,
        airline: String
    })
)

module.exports = Flight