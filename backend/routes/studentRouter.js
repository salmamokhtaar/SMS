const express = require("express");

const student = require("../Controller/studentController")

const router = express.Router();

router.get("/get/student",student.GetStudent);
router.post("/create/student",student.createStudent);
router.put("/update/student/:id",student.updateStudent);
router.delete("/delete/student/:id",student.deleteStudent);

// export router
module.exports = router;