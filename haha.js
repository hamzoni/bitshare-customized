const port = 6001;

const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/", serveStatic(path.join(__dirname, "/build/dist")));

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/build/dist/index.html");
});

app.listen(port);

console.log("http://localhost:%s", port);
