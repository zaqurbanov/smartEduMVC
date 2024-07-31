const express = require('express');
const router = express.Router();
const coursesController = require('../controller/coursesController')

router.get('/',coursesController.getCoursesPage)
router.post('/',coursesController.createCourse);
// router.get('/:id',coursesController.getCourseById),
router.get('/:slug',coursesController.getCourseBySlug)


module.exports = router 