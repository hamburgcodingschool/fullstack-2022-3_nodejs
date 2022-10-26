const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {
    res.send("Hello I will show up in your client... I guess a browser for now...");
});

app.get("/about", function(req, res) {
    res.send("This is the about page...");
});

app.get("/calculate", function(req, res) {
    const number1 = req.query.number1 || 0;
    const number2 = req.query.number2 || 0;

    const result = Number(number1) + Number(number2);

    res.send(`🧮 ${number1} + ${number2} = ${result}`);
});

app.get("*", function(req, res) {
    res.send("This page does not exist... It's probably your fault...");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});


