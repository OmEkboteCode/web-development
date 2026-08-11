const express = require("express");
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log("App is listening on Port", port);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("Request received");
//     const fruits = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>"
//     res.send(fruits)
// });

app.get("/", (req, res) =>{
    res.send("you contacted root path.")
})
app.get("/:username/:id", (req, res) =>{
    let { username, id} = req.params
    const htmlString = `<h1>Welcome to the page of @${username}!</h1>`
    res.send(htmlString)
})

app.get("/search", (req, res) => {
    const { q } = req.query
    if (!q){
        res.send("<h1>Nothing searched</h1>")
    }
    res.send(`<h1>search results for query: ${q}</h1>`);
})

// app.get("/apple", (req, res) =>{
//     res.send("you contacted apple path")
// })

// app.get("/mango", (req, res) =>{
//     res.send("you contacted mango path")
// })

// app.get("/*splat", (req, res) => {
//     res.send("This page does not exits")
// })
// app.post("/", (req, res) => {
//     res.send("You sent a post request to root")
// })


