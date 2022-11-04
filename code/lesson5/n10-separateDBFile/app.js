const db = require("./database/db");
const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {

    db.getStudents(function(results) {
        const templateData = {
            students: results
        }
        res.render("index", templateData);
    });
});

app.get("/courses", function(req, res) {

    db.getCourses(function(results) {
        const templateData = {
            courses: results
        }
        res.render("courses", templateData);
    });
});

app.get("/student", function(req, res) {

    const id = req.query.id;

    db.getStudentById(id, function(results) {
        const templateData = {
            student: results
        }
        res.render("student", templateData);
    });
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});