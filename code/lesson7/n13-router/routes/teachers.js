const express = require("express");
const router = express.Router();

router.get("/teachers", function(req, res) {
    res.send("all teachers");
});

router.get("/teachers/:id", function(req, res) {
    res.send("one specific teacher");
});

router.post("/teachers", function() {
    res.send("add new teacher");
})

module.exports = router;