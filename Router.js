const express = require('express');
const { All } = require('./Controller');
const { Insert } = require('./Controller')

const router = express.Router()

router.get('/',All);
router.post('/insert',Insert)

module.exports = router;