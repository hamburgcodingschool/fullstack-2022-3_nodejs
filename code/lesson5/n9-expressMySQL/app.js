const mysql = require("mysql2");
const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "my_first_db"
});

app.get("/", function(req, res) {

    const sqlQuery = "SELECT * FROM students";

    connection.query(sqlQuery, function(err, results) {

        const templateData = {
            students: results
        }

        res.render("index", templateData)
    });
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});