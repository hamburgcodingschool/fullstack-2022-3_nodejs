const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "my_first_db"
});

function getAllStudents(callback) {
    const queryString = "SELECT * FROM students";
    connection.query(queryString, function(err, results) {
        callback(results);
    });
}

function getFirstStudent(callback) {
    const queryString = "SELECT * FROM students WHERE id = 1";
    connection.query(queryString, function(err, results) {
        const firstStudent = results[0];
        callback(firstStudent);
    });
}

function getStudentById(id, callback) {
    const queryString = "SELECT * FROM students WHERE id = ?";
    const params = [id];

    connection.query(queryString, params, function(err, results) {
        callback(results[0]);
    });
}

module.exports = {
    getAllStudents,
    getFirstStudent,
    getStudentById
}