const express = require('express')

const teacherController = require ("../Controller/teacherController")

const router = express.Router()
router.post("/create/teacher", teacherController.createTeacher)
router.get("/teacher/search/:key",teacherController.searchTeacher);
router.get("/teacher/get", teacherController.getAllTeacher)
router.put("/update/teacher/:id",teacherController.updateTeacher);
router.delete("/delete/teacher/:id",teacherController.deleteTeacher);


module.exports = router;
