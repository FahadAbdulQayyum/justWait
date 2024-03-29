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
// So here, in case if error happened, then console the error
db.on('error', (err) => {
    console.log('err', err);
})

// So, here, in case of successfully open then console me in terminal the 'DB running!'
db.on('open', async () => {
    console.log('DB running!');
})

// In this functionality, the system finds the users, meanwhile if any errors faced
// by the system then console it in form the form of warning to highlight its important
Users.find({}, function (err, users) {
    if (err) console.warn(err);
    console.warn(users);
})

// db.then(() => {
//     console.warn('Connected with db.');
// })

// In this, when we hit to the server '/', the screen displays us the '{message: `Hello ... , success: true}' showing the respective port
app.get('/', (req, res) => {
    try {
        return res.send({ message: `Hello NodeJs server is Running on port ${PORT}!`, success: true })
    } catch (e) {
     // In case of the error with server route '/', then the screen display a respective error
     // as called in the following e?.message 
        console.log('e', e);
        return res.send({ message: e?.message, success: false })
    }
})

// Other routes detail made separated in routes directories
app.use('/', require('./routes'))

// That shows that console in server as when the website run in the localhost
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
})
