const express = require("express");
const { signup, signin, getAllStudent, getStudentById} = require("../controllers/studentController");
const studentRouter = express.Router();

studentRouter.post("/signup", signup);
studentRouter.post("/signin", signin);
studentRouter.get("/", getAllStudent);
studentRouter.get("/:id", getStudentById);

module.exports = studentRouter;
