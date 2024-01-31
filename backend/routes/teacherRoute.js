const express = require('express')

const teacherController = require ("../Controller/teacherController")

const router = express.Router()

router.post("/create/teacher", teacherController.createTeacher)
router.get("/teacher/get", teacherController.getAllTeacher)

module.exports = router;
