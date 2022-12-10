require("dotenv").config();
const express = require("express");
const moviesDB = require("./moviesDB");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async function(req, res) {
    // moviesDB.findLordMovies(function(result) {
    //     res.json(result);
    // });
    const result = await moviesDB.findLordMoviesPromise();
    res.json(result);
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})