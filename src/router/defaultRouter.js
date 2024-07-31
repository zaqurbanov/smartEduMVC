const express = require('express');
const router = express.Router();
const defaultController = require('../controller/defaultController')
const counterController = require('../controller/counterController')
router.get('/',defaultController.getDefaultPage);
router.post('/',counterController.createCounter)

module.exports = router 