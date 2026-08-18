const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const {v4 : uuidv4} = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended : true}));
app.use(methodOverride("_method"));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


let posts = [
    {
        id: uuidv4(),
        username: "Om",
        content: "Starting my journey toward GSoC!"
    },
    {
        id: uuidv4(),
        username: "Alice",
        content: "REST APIs are starting to make sense."
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});



app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;

    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("show.ejs", { post });
});


app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect(`/posts`);
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect(`/posts`);
});



app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});