const express = require('express')
const router = express.Router()
const { AuthLogin, Register, Product } = require('../controllers/users')

router.post('/login', AuthLogin)
router.post('/register', Register)
router.get('/product', Product)

module.exports = router