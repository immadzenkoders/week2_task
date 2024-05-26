const express = require('express');
const router = express.Router();
const { authenticateTeacher} = require('../middlewares/authTokenMiddleware');
const { addCourse, getCourse, getCourseById, deleteCourse, editCourse} = require('../controllers/courseController');


router.post('/add', authenticateTeacher, addCourse);
router.get('/', getCourse);
router.get("/:id", getCourseById);
router.delete("/:id", authenticateTeacher, deleteCourse);
router.put("/:id", authenticateTeacher, editCourse);

module.exports = router;
