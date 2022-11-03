const mysql = require("mysql2");

// Create a connection
// Select a database
// Query something with SQL
// Look at the result...

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "classicmodels"
});

const queryString = `SELECT *
                    FROM employees
                    LEFT JOIN offices ON offices.officeCode = employees.officeCode
                    LIMIT 1`;

connection.query(queryString, function(err, results, fields) {
    if (err) {
        console.log("There was an error...");
        return;
    }

    console.log(results);

    // for (let i = 0; i < results.length; i++) {
    //     console.log(results[i].productline);
    // }

    // console.log(fields);
});