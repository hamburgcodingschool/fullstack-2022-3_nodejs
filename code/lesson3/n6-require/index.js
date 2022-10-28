const express = require("express");
const somethingAwesome = require("./somethingAwesome");
const data = require("./data.json");

const app = express();

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    const templateData = {
        "people": data
    }
    res.render("index", templateData);
});


app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});


// CREATE A PROJECT WITH 2 TEMPLATES
// 1 Homepage that will have a list of links to other pages
// 1 Detail template that will generate a page with different content for each link in the homepage