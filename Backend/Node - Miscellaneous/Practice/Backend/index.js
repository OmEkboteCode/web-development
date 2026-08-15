const express = require("express");
const app = express();

const port = 8080;

app.get("/developers", (req, res) => {
    const {name, skill} = req.query;
    res.send(`Developer: ${name}
Primary Skill: ${skill}`);
});





app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
});