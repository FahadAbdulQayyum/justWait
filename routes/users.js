// express.js is imported
const express = require('express')
// express.Router is stored in router variable
const router = express.Router()
// AuthLogin, Register and Product function called from users
const { AuthLogin, Register, Product } = require('../controllers/users')

// Router defined in route '/login' is AuthLogin functionalities.
router.post('/login', AuthLogin)
// Router defined in route '/register' is Register functionalities.
router.post('/register', Register)
// Router defined in route '/product' is Product functionalities.
router.get('/product', Product)

// Router exported to make it importable anywhere
module.exports = router
