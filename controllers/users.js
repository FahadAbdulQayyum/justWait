// Users exported from the models directory, that is UserSchema
const { Users } = require('../models')

// This function's work is only authenticate the user
const AuthLogin = (req, res) => {
    try {
        console.log('post req', req?.body);
        // The req is structured to get body
        const { body } = req

        // This sends back the success true message when the user is athenticated.
        return res.send({ message: 'Successfully Loggedin!', success: true, user: body })
    } catch (e) {
        console.log('e', e);

        // This returns a false succcess with the message error
        return res.send({ message: e?.message, success: false })
    }
}

// This is Register function
const Register = (req, res) => {
    try {
        // Destructured the body from request 'req' sent by users from front end.    
        const { body } = req

        // In case of body not found then this conditional function runs and finishes due to this function ends with return 
        if (!body) {
            console.log('body if', body);
            // If body is empty then inform the user that message is empty and make it unsuccessful
            return res.send({ success: false, message: 'empty.' })
        }
        console.log('body out of if', body);
        // let e = Object.entries(body)
        // let user = new Users()
        // let user = new Users(e)

        // In case of body is not empty then this run
        // in which, users data is saved following the userSchema, architecture defined in model
        let user = new Users(body)
        console.log('user', user);
        // After if the data is matched with schema then save the data too in the respective mongodb
        user.save()
            .then(() => {
                console.log('*******');
                // Then user receives a notification that Data saved successfully
                return res.send({ success: true, message: 'Successfully saved' })
            })
            .catch((e) => console.log('e',e))
//         .catch((e) => return res.send({ message: e?.message, success: true }))

        console.log('body', body);
    } catch (e) {
//         return res.send({ success: false, message: e?.message })
    }
}

const Product = (req, res) => {
    try {
        Users.find({}, (err, tasks) => {
            if (err || !tasks?.length) {
                return res.send({ success: false, message: 'No Data Found!' })
            }
            return res.send({ success: true, tasks })
        })
    }
    catch (e) {
        console.log('e', e);
        return res.send({ message: e?.message, success: true })
    }
}

// const Product = (req, res) => {
//     Users.find().then((data) => {
//         res.json(data)
//     })
// }

module.exports = {
    AuthLogin,
    Register,
    Product
}
