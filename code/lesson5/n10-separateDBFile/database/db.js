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

module.exports = {
    getStudents
};