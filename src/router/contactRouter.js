const express = require('express');

const router = express.Router();
const contatController = require('../controller/contactController');

router.get('/',contatController.getContactPage)


module.exports = router