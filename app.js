// express imported
const express = require('express')
// Cross-Origin Resource Sharing imported
const cors = require('cors')
// express introduced to the app component
const app = express()
// Mongoose Setup called from config respository
const { mongoose } = require('./config')
// User model retrieved from model Schema
const { Users } = require('./models')

 // PORT is defined depending on its environment, 
 // at first it checks whether it's connected to 
 // the production environment if it finds it true
 // then fetch its PORT number and run, otherwise
 // in local system, the default PORT will be its PORT.
const PORT = process.env.PORT || 8080

// This by using the express.json enable us to fetch the 
// readable form of data from backend.
app.use(express.json())

// This Cross-Origin resource sharing allows the restricted resource on webpage that
// is requested from another domain from which the first resource was served. 
app.use(cors())
// app.use(cors({ origin: true, credentials: true }))

// Consoling the mongoose.connection to check whether it works
console.log('mongoose', mongoose.connection);

// mongoose.connection stored in the db variable
const db = mongoose.connection

// There two types of response could happen (Either error or successfully open)
// So here, in case if error happened
db.on('error', (err) => {
    console.log('err', err);
})

db.on('open', async () => {
    console.log('DB running!');
})

Users.find({}, function (err, users) {
    if (err) console.warn(err);
    console.warn(users);
})

// db.then(() => {
//     console.warn('Connected with db.');
// })

app.get('/', (req, res) => {
    try {
        return res.send({ message: `Hello NodeJs server is Running on port ${PORT}!`, success: true })
    } catch (e) {
        console.log('e', e);
        return res.send({ message: e?.message, success: false })
    }
})

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
})
