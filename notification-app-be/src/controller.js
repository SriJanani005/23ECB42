const { Log } = require("../logger");
const { processNotification } = require("../services/notificationService");

const sendNotification = async (req, res) => {
    try {
        const result = await processNotification(req.body);

        await Log("backend", "info", "controller", "Notification sent");

        res.status(200).json({ message: "Success", result });
    } catch (error) {
        await Log("backend", "error", "controller", error.message);

        res.status(500).json({ message: "Failed", error: error.message });
    }
};

module.exports = { sendNotification };