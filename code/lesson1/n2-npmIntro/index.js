const express = require('express');
const app = express();

const port = 3000;

app.get("/", function(req, res) {

    res.send("This is an express server");

});

app.get("/about", function(req, res) {

    const x = 2 + 2;
    const y = x * 5;
    
    res.send(String(y));

});

app.get("/api", function(req, res) {

    const someObject = {
        status: "ok",
        data: [
            {
                name: "Joe",
                city: "Whatever"
            },
            {
                name: "Barbara",
                city: "Wherever"
            }
        ]
    }
    res.json(someObject);
});

// 1 - Make this work on your machine
// 2 - Add a couple more GET routes and try them out
// 3 - ask me questions


app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});