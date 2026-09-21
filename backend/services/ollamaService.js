const axios = require("axios");

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";

async function askOllama(prompt) {

    const response = await axios.post(
        `${OLLAMA_URL}/api/generate`,
        {
            model: "llama3.2:1b",
            prompt: prompt,
            stream: false
        }
    );

    return response.data.response;
}

module.exports = {
    askOllama
};