const express = require('express')
const router = express.Router()
const { MakeControllers: ctrl } = require('../controllers')

router.get('/', ctrl.get)

module.exports = router
