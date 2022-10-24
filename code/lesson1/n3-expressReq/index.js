const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {

    console.log(req.query);
    let name = req.query.name;
    if (!name) {
       name = "nobody in particular..." ;
    }
    
    res.send(`<h1>Hello ${name}</h1>`);

});

app.listen(port, function() {
    console.log(`Listenin on ${port}`);
});