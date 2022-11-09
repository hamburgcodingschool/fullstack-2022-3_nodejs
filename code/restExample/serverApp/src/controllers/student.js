const studentsDB = require("../databases/students");

function students(req, res) {
    studentsDB.getAllStudents(function(results) {
        res.json(results);
    });
}

function studentById(req, res) {
    const paramId = Number(req.params.id);
    if (!paramId) {
        res.status(404).json({
            status: "Error",
            description: "Invalid URL"
        });
        return;
    }

    studentsDB.getStudentById(paramId, function(result) {
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({
                status: "Error",
                description: "Student not found"
            });
        }
    });
}

module.exports = {
    students,
    studentById
}