const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmlqYW5hbmlfMjNlY2I0MkBrZ2tpdGUuYWMuaW4iLCJleHAiOjE3ODI4MDM3NDAsImlhdCI6MTc4MjgwMjg0MCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjU2YzRkMzRmLTYzOGEtNDIwOC1hN2EyLTAzNzYwNjVkYjliNCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNyaSBqYW5hbmkgcyIsInN1YiI6ImI2NDE3ZDViLTYzOGMtNDEwYy1iY2ZiLWY1YzAxYjdkZTFkMiJ9LCJlbWFpbCI6InNyaWphbmFuaV8yM2VjYjQyQGtna2l0ZS5hYy5pbiIsIm5hbWUiOiJzcmkgamFuYW5pIHMiLCJyb2xsTm8iOiIyM2VjYjQyIiwiYWNjZXNzQ29kZSI6IldqTnlDVCIsImNsaWVudElEIjoiYjY0MTdkNWItNjM4Yy00MTBjLWJjZmItZjVjMDFiN2RlMWQyIiwiY2xpZW50U2VjcmV0IjoiQ0FuZFZlYmJzWHluY3FncSJ9.Mc_YRkFUH1XgIpPmY0OwJCR1pwJP1tZEAGY0CMQRgjI";

async function Log(stack, level, packageName, message) {
    try {
        await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = Log;