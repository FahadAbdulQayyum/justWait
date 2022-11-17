const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    htmlarrr: [
    ],
    htmlarr: [
    ],
    // namearr: []
})

const Users = mongoose.model('users', userSchema)

module.exports = Users