const express = require('express');
const router = express.Router();
const aboutController = require('../controller/aboutController')


router.get('/',aboutController.getAboutPage)
// router.post('/',aboutController.createAboutData);
router.post('/update',aboutController.updateAboutPage)


module.exports = router