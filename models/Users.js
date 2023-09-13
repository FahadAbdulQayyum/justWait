// The mongoose library imported here to enable us to create a model for mongodb,
// The model is like a schema that is needed for backend to store the data accordingly, defined in this schema.
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
