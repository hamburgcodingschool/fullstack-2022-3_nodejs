const db = require("./db");
const connection = db.connection;

function getAllCourses(callback) {
    const queryString = "SELECT name, CONCAT('/courses/', id) AS url FROM courses";
    connection.query(queryString, function(err, results) {
        callback({
            count: results.length,
            next: "not yet",
            previous: "not yet",
            results: results
        });
    });
}

function getCourseById(id, callback) {
    const queryString = `SELECT * FROM courses WHERE id = ?`;
    const params = [id];

    connection.query(queryString, params, function(err, results) {
        callback(results[0]);
    });
}

function getCoursesByIdWithStudents(courseId, callback) {
    const queryString = `
        SELECT courses.*, students.name AS student_name, CONCAT("/students/", students.id) AS url
        FROM courses
        LEFT JOIN students ON students.course_id = courses.id
        WHERE courses.id = ?`;
    const params = [courseId];

    connection.query(queryString, params, function(err, results) {
        callback(results);
    });
}


module.exports = {
    getAllCourses,
    getCourseById,
    getCoursesByIdWithStudents
}