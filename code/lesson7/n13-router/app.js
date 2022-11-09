const express = require("express");

const studentsRouter = require("./routes/students");
const coursesRouter = require("./routes/courses");
const teachersRouter = require("./routes/teachers");

const app = express();
const port = 3000;

app.use(studentsRouter);
app.use(coursesRouter);
app.use(teachersRouter);

app.get("/", function(req, res) {
    res.send("homepage");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});