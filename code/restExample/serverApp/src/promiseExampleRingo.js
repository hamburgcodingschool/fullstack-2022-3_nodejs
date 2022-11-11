const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "my_first_db"
}).promise();

(async function() {
    const results = await connection.query("SELECT * FROM students LIMIT 1");
    console.log(results[0]);

    console.log("WAIT FOR IT...");

    const results2 = await connection.query("SELECT * FROM COURSES LIMIT 1");
    console.log(results2[0]);

    console.log("DONE");
    
})();


// connection.query("SELECT * FROM students LIMIT 1", function(error, results) {
    
//     console.log(results);
    
//     console.log("WAIT FOR IT...");
    
//     connection.query("SELECT * FROM courses LIMIT 1", function(error, results) {
//         console.log(results);
//         console.log("DONE");
//     });
// });
