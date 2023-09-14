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
        return res.send({ message: e?.message, success: true })
    }
}

const Register = (req, res) => {
    try {
        const { body } = req

        if (!body) {
            console.log('body if', body);
            return res.send({ success: false, message: 'empty.' })
        }
        console.log('body out of if', body);
        // let e = Object.entries(body)
        // let user = new Users()
        // let user = new Users(e)
        let user = new Users(body)
        console.log('user', user);
        user.save()
            .then(() => {
                console.log('*******');
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
