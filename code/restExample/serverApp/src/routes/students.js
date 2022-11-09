const studentController = require("../controllers/student");
const express = require("express");
const router = express.Router();

router.get("/", studentController.students);
router.get("/:id", studentController.studentById);

module.exports = router;