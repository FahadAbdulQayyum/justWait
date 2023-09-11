// express imported
const express = require('express')
// Using this express.Router and saving it into a variable means making this directory router
const router = express.Router()

router.use('/auth', require('./users'))

module.exports = router
