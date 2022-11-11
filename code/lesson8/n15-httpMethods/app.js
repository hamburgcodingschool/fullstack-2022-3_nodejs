const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", function(req, res) {
    res.send("Hello");
});

app.get("/students", function(req, res) {
    res.send("congrats you hit a get method request");
});

app.post("/students", function(req, res) {
    console.log(req.body);
    res.send("POSTY POSTY POSTY");
});

app.put("/students/:id", funciton(req, res) {

});


app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});