const mongoose = require('mongoose')
// const { Users } = require('../models')

let driverUrl = `mongodb+srv://fahad:fahad@contactmanager.abu8h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(driverUrl)

// mongoose.connect(driverUrl).then(() => {
//     console.warn('Connected with db.');
// });

// Users.find({}, function (err, users) {
//     if (err) console.warn(err);
//     console.warn(users);
// })

module.exports = mongoose