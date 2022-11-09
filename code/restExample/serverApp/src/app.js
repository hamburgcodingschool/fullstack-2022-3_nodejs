require("dotenv").config();
const express = require("express");
const router = require("./routes/router");

const app = express();
const port = 3000;

app.use(router);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});