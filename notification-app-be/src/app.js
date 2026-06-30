const express = require("express");
const app = express();

const controller = require("./controller");

app.get("/test", controller.handleRequest);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});