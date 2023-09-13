// The mongoose library imported here to enable us to create a model for mongodb,
// The model is like a schema that is needed for backend to store the data accordingly, defined in this schema.
const mongoose = require('mongoose')

// userSchema made for users, that helps back what to store in mongodb when the data is retrieved.
const userSchema = new mongoose.Schema({
    // This is the arr for the data who are repeated, the naming convention is up to the users
    htmlarrr: [
    ],
    htmlarr: [
    ],
    // namearr: []
})

const Users = mongoose.model('users', userSchema)

module.exports = Users
