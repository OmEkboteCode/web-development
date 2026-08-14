const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

const portfolioData = require("./data.json")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home.ejs", {
        ...portfolioData
    });
});

app.get("/profile/:username", (req, res) => {
    const {username} = req.params;
    
    res.render(`profile.ejs`, {
        
        ... portfolioData

    });
});

app.listen(port, () => {
    console.log("App is listening to port: ", port);
});


