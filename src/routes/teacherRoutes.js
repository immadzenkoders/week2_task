const express = require("express");
const { signup, signin, getAllTeachers, getTeacherById  } = require("../controllers/teacherController");
const teacherRouter = express.Router();

teacherRouter.post("/signup", signup);
teacherRouter.post("/signin", signin);
teacherRouter.get("/", getAllTeachers);
teacherRouter.get("/:id", getTeacherById );
module.exports = teacherRouter;
