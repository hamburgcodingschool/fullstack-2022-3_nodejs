const express = require("express");
const cors = require("cors");
const db = require("./databases/db");

const app = express();

const port = 3000;

app.use(cors());

app.get("/", function(req, res) {
    res.send("REST API data is in another endpoint...");
});

app.get("/students", function(req, res) {
    db.getAllStudents(function(results) {
        res.json(results);
    });
});

app.get("/firststudent", function(req, res) {
    db.getFirstStudent(function(result) {
        res.json(result);
    });
});

app.get("/students/:id", function(req, res) {
    const paramId = Number(req.params.id);
    if (!paramId) {
        res.status(404).json({
            status: "Error",
            description: "Invalid URL"
        });
        return;
    }

    db.getStudentById(paramId, function(result) {
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({
                status: "Error",
                description: "Student not found"
            });
        }
    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
