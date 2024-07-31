
const roleController = require('../controller/roleController')
const express = require('express');
const router = express.Router();


router.post('/',roleController.addRole)

module.exports = router