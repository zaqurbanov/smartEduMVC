const express = require('express');
const router = express.Router();
const dahsboardController = require('../controller/dashboardController');
const authMiddle = require('../middleware/authMiddle');
const adminMiddleware = require('../middleware/adminMiddle');

router.get('/',dahsboardController.getDashboardPage);
router.get('/users',adminMiddleware,dahsboardController.getDashboardUsersPage)
router.get('/user/:id',adminMiddleware, dahsboardController.getDashboardUserPage)
router.get('/user-delete/:id',adminMiddleware,dahsboardController.deleteUserById);
router.post('/user/:id',adminMiddleware,dahsboardController.updateUserById)




module.exports = router