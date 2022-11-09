const express = require("express");
const router = express.Router();

router.get("/students", function(req, res) {
    res.send("all students");
});

router.get("/students/:id", function(req, res) {
    res.send("one specific student");
});

module.exports = router;