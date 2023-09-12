// express.js is imported
const express = require('express')
// express.Router is stored in router variable
const router = express.Router()
const { AuthLogin, Register, Product } = require('../controllers/users')

router.post('/login', AuthLogin)
router.post('/register', Register)
router.get('/product', Product)

module.exports = router
