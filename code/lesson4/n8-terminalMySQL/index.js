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

const queryString = "SELECT * FROM productlines";

connection.query(queryString, function(err, results, fields) {
    if (err) {
        console.log("There was an error...");
        return;
    }

    for (let i = 0; i < results.length; i++) {
        console.log(results[i].productline);
    }

    console.log(fields);
});