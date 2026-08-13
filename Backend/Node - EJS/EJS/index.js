const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.use(express.static(path.join(__dirname, "public/css")))
app.use(express.static(path.join(__dirname, "public/javascript")))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1 // Assume it came from database.
    res.render("rolldice.ejs", {diceValue});
})


app.listen(port, () => {
    console.log(`App is listening on Port: ${port}`);
});




app.get("/ig/:username", (req, res) => {
    const {username} = req.params 
    const instagramData = require("./data.json");
    const data = instagramData[username];
    if(data) {
        res.render("instagram.ejs", {data});
    } else{
        res.render("error.ejs")
    }
    
})





// app.get("/ig/:username", (req, res) => {
//     const followers = ["Adam", "Bob", "Steve", "ABC"]
//     let { username } = req.params;
//     res.render("instagram.ejs", {username, followers});
// })
