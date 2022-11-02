const express = require("express");
const app = express();
const data = require("./data.json");

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {    
    const templateData = {
        "people": data
    };

    res.render("index", templateData);
});

app.get("/detail", function(req, res) {    

    const index = req.query.index || 0;

    console.log(index);

    const templateData = {
        person: data[index]
    }

    res.render("detail", templateData);
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});