const express = require("express");
const router = express.Router();

const { askOllama } = require("../services/ollamaService");

router.post("/", async (req, res) => {

    const { prompt } = req.body;

    try {

        const response = await askOllama(prompt);

        res.json({
            reply: response
        });

    } catch (err) {

        res.status(500).json({
            error: "Something went wrong"
        });

    }

});

module.exports = router;