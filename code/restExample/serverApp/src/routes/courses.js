const courseController = require("../controllers/course");
const express = require("express");
const router = express.Router();

router.get("/", courseController.courses);
router.get("/:id", courseController.courseById);

module.exports = router;