const express = require("express");
const studentRouter = require("./students");
const courseRouter = require("./courses");

const router = express.Router();

router.get("/", function(req, res) {
    res.send("it works...");
});

router.use("/students", studentRouter);
router.use("/courses", courseRouter);

module.exports = router;