const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "my_first_db"
});

function getStudents(callback) {
    const sqlQuery = "SELECT * FROM students";

    connection.query(sqlQuery, function(err, results) {
        callback(results);
    });
}

function getCourses(callback) {
    const sqlQuery = "SELECT * FROM courses";

    connection.query(sqlQuery, function(err, results) {
        callback(results);
    });
}

function getStudentById(id, callback) {
    // THIS IS SUPER DANGEROUS AND FOR TODAY ONLY
    // IF I EVER SEE YOU DOING THIS AGAIN... UUFf...
    const sqlQuery = "SELECT * FROM students WHERE id = " + id;

    connection.query(sqlQuery, function(err, results) {
        // SINCE WE ARE MATCHING BY ID
        // WE KNOW THAT ONLY ONE RESULT CAN BE GIVEN
        // SINCE PRIMARY KEYS ARE UNIQUE
        callback(results[0]);
    });
}

module.exports = {
    getStudents,
    getCourses,
    getStudentById
};