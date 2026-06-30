const Log = require("./logger");

async function handleRequest(req, res) {
    await Log("backend", "info", "handler", "Request received");

    res.send("Hello from backend");

    await Log("backend", "info", "handler", "Request completed");
}

module.exports = { handleRequest };