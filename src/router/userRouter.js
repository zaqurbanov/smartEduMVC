const express = require('express');
const router = express.Router()
const userController = require('../controller/userController')

router.post('/signup',userController.signUpUser );
router.get('/signup',userController.getUserSignUpPage)
router.get('/login',userController.getLoginPage);
router.post('/login',userController.loginUser);
router.get('/logout',userController.logoutUser);
module.exports = router