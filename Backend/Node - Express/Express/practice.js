// const express = require("express");

// const app = express();

// const port = 3000;

// app.listen(port, () => {
//     console.log(`App is listening on the Port: ${port}`);
// });

// app.get("/", (req, res) => {
//     res.send("Welcome to Campus Library");
// });
// app.get("/about", (req, res) => {
//     res.send("About Campus Library");
// });
// app.get("/contact", (req, res) => {
//     res.send("Contact Campus Library");
// });

// app.get("/users/:username/:id", (req, res) => {
//     const {username, id} = req.params;
//     const greeting = `<b>Welcome ${username}! Your user ID is ${id}</b>`
//     res.send(greeting)
// })


// app.get("/search", (req, res) => {
//     const {q , author} = req.query;
//     res.send(`<b>Searching for ${q} by ${author}</b>`)
// })

// app.get("/books/:category", (req, res) => {
//     const {category} = req.params;
//     res.send(`<i>Books in ${category} category</i>`)
// })

// // app.get("/books/fiction", (req, res) => {
// //     res.send("Books in fiction category")
// // })




// app.post("/books", (req, res) => {
//     res.send("New book submitted successfully")
// })

// app.get("/*splat", (req, res) => {
//     res.send("404 - Page Not Found")
// })


// app.get("/", (req, res) => {
//     res.send("Campus Library");
// });

// app.get("/books/:category", (req, res) => {
//     const { category } = req.params;
//     res.send(`Books: ${category}`);
// });

// app.get("/search", (req, res) => {
//     const { q, type} = req.query;
//     res.send(`Searching for: ${q}
// Type: ${type}`);
// });

// app.post("/books", (req, res) => {
//     res.send("Book added");
// });

// app.get("/students/:name", (req, res) => {
//     const {name} = req.params
//     res.send(`Welcome ${name}!!`);
// });

// app.put("/books", (req, res) => {
//     res.send("Book updated")
// })
// app.delete("/books", (req, res) => {
//     res.send("Book deleted")
// })

const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on the Port: ${port}`);
});


app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to Campus Library");
});