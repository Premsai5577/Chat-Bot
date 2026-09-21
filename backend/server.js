const express = require("express");
const cors = require("cors");
const path = require("path");

const chatRoute = require("./routes/chat");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", chatRoute);
app.use(express.static(path.join(__dirname, "../frontend")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});