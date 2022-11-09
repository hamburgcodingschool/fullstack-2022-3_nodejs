const express = require("express");
const router = express.Router();

router.get("/courses", function(req, res) {
    res.send("all courses");
});

router.get("/courses/:id", function(req, res) {
    res.send("one specific course");
});

module.exports = router;