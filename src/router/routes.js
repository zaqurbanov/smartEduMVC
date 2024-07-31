const express = require('express');
const router = express.Router();
const defaultRouter = require('./defaultRouter');
const aboutRouter = require('./aboutRouter')
const coursesRouter = require('./coursesRouter')
const dashboardRouter = require('./dashboardRouter');
const contactRouter = require('./contactRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');    
const roleRouter = require('./roleRouter')


const authMiddle = require('../middleware/authMiddle');
router.use('/',defaultRouter);
router.use('/about',aboutRouter);
router.use('/courses',coursesRouter);
router.use('/dashboard',authMiddle, dashboardRouter);
router.use('/contact',contactRouter);
router.use('/category',categoryRouter);
router.use('/user',userRouter); 
router.use('/role',authMiddle,roleRouter);




module.exports = router