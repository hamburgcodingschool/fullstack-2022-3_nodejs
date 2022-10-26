const express = require("express");
const { Agent } = require("http");
const app = express();

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/steps", function(req, res) {  
    res.render("steps.ejs");
});

app.get("/contacts", function(req, res) {  

    const name = req.query.n || "Agustina";

    const data = {
        contactName: name,
        image: "images/Homer_simpson.webp",
        fruit: [
            "Apples",
            "Oranges",
            "Pears",
            "Bananas",
            "Strawberries",
            "Pineapple"
        ]
    };

    res.render("contacts.ejs", data);
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});


