const coursesDB = require("../databases/courses");
const studentsDB = require("../databases/students");

function courses(req, res) {
    coursesDB.getAllCourses(function(results) {
        res.json(results);
    });
}

function courseById(req, res) {
    const paramId = Number(req.params.id);
    if (!paramId) {
        res.status(404).json({
            status: "Error",
            description: "Invalid URL"
        });
        return;
    }

    coursesDB.getCourseById(paramId, function(result) {
        if (result) {

            studentsDB.getStudentsByCourseId(paramId, function(students) {
                result.students = students;
                res.json(result);
            });
            
        } else {
            res.status(404).json({
                status: "Error",
                description: "Course not found"
            });
        }
    });
}

function addCourse(req, res) {

    // We should probably do sanitize this date first
    const newCourse = {
        name: req.body.name,
        shortDescription: req.body.shortDescription,
        description: req.body.description
    };

    coursesDB.insertIntoCourses(newCourse, function(result) {
        const id = result.insertId;
        res.send(`Added to database with id: ${id}`);
    });
}

// function courseById(req, res) {
//     const paramId = Number(req.params.id);
//     if (!paramId) {
//         res.status(404).json({
//             status: "Error",
//             description: "Invalid URL"
//         });
//         return;
//     }
// 
//     // We really hate this code...
//     coursesDB.getCoursesByIdWithStudents(paramId, function(results) {
//         if (results.length > 0) {
//             const course = {
//                 id: results[0].id,
//                 name: results[0].name,
//                 short_description: results[0].short_description,
//                 description: results[0].description
//             }
//             const students = [];
//             if (results[0].student_name) {
//                 for (let i = 0; i < results.length; i++) {
//                     const student = {
//                         name: results[i].student_name,
//                         url: results[i].url
//                     }
//                     students.push(student);
//                 }
//             }
//             course.students = students;

//             res.json(course);

//         } else {
//             res.status(404).json({
//                 status: "Error",
//                 description: "Course not found"
//             });
//         }
//     });
// }

module.exports = {
    courses,
    courseById,
    addCourse
}