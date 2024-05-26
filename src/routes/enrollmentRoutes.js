const express = require('express');
const enrollmentRouter = express.Router();
const { authenticateStudent } = require('../middlewares/authTokenMiddleware');
const { create, get, getEnrolllmentById, getEnrolllmentByStuId, getEnrolllmentByCourseId } = require('../controllers/enrollmentController');

enrollmentRouter.post('/create/:id', authenticateStudent, create);
enrollmentRouter.get('/', get);
enrollmentRouter.get("/:id", getEnrolllmentById);
enrollmentRouter.get("/stu/:id", getEnrolllmentByStuId);
enrollmentRouter.get("/course/:id", getEnrolllmentByCourseId);

module.exports = enrollmentRouter;
