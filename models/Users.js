// The mongoose library imported here to enable us to create a model for mongodb,
// The model is like a schema that is needed for backend to store the data accordingly, defined in this schema.
const mongoose = require('mongoose')

// userSchema made for users, that helps back what to store in mongodb when the data is retrieved.
const userSchema = new mongoose.Schema({
    // This is the arr for the data who are repeated, the naming convention is up to the users
    htmlarrr: [
    ],
    // This is the arr for the data wich are unique in the array
    htmlarr: [
    ],
    // namearr: []
})

// The userSchema to be store in the MongoDB in the name of 'users' which I mentioned here
const Users = mongoose.model('users', userSchema)

module.exports = Users
