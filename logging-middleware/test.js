const Log = require("./logger");

async function testLog() {

    await Log(
        "backend",
        "info",
        "handler",
        "Logging middleware is working successfully"
    );

}

testLog();