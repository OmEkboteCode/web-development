# EJS

## Templating

- <b>EJS(Embedded Javascript Templates)</b>

- EJS is a simple server-side templating language that lets you generate HTML markup with plain Javascript.

- Think of it as blueprint

## Using EJS

- EJS is by defualt internally required by express.

- Veiw -> Templates, Template engine a package is used to create views(templates) , rendering, displaying it.

- Create a views folder when using view engine. Default.

```js

const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/hello", (req, res) => {
    res.send("Hello");
});


app.listen(port, () => {
    console.log(`App is listening on Port: ${port}`);
});

```

## Interpolation Syntax

- Interpolation refers to embedding expressions into markdown up text.

- EJS makes our page dynamic, page changes in runtime.

- EJS tags help make page dynamic.


### EJS tags

- <%= Outputs the value into the template (HTML escaped)

```ejs

<h3><%= 1 * 3 %></h3>
<h3><%= "apnacollege".toUpperCase() %></h3>
<h3><%= ["Hello", "Konichiwa", "Hey"][0] %></h3>

```

## Passing data to EJS


```js
const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

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
    // res.render("rolldice.ejs", {number: diceValue});
    res.render("rolldice.ejs", {diceValue});
})


app.listen(port, () => {
    console.log(`App is listening on Port: ${port}`);
});
```

```ejs
<h1>Dice Gave Value: <%= number %></h1>
</body>

<h1>Dice Gave Value: <%= diceValue %></h1>
```

## Instagram EJS

- Create a basic template for instagram page based on following route:

- /ig/:username

```ejs
    <h2>This Page Belongs To @<%= username %></h2>
    <button id="follow">Follow</button>
    <button id="message">Message</button>
```

```js
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.render("instagram.ejs", {username});
})
```

## Conditional Statementss in EJS

- Adding conditions inside EJS

- <% 'Scriptlet' tag, for control-flow(loops, conditionals,...), no output

```ejs
    <h1>Dice Gave Value: <%= diceValue %></h1>
    <% if(diceValue == 6) { %>
    <h2>NICE! Roll Dice Again.</h2>
    <% } %>
```

## Loops in EJS


```ejs
    <h2>This Page Belongs To @<%= username %></h2>
    <button id="follow">Follow</button>
    <button id="message">Message</button>

    <h3>Accounts that follow you: </h3>
    <ul>
        <% for(let name of followers) { %>
            <li><%= name %></li>
        <% } %>
    </ul>
```

```js
app.get("/ig/:username", (req, res) => {
    const followers = ["Adam", "Bob", "Steve", "ABC"]
    let { username } = req.params;
    res.render("instagram.ejs", {username, followers});
})

    <h2>This Page Belongs To @<%=  %></h2>
    <button id="follow">Follow</button>
    <button id="message">Message</button>

    <h3>Accounts that follow you: </h3>
    <ul>
        <% for(let name of followers) { %>
            <li><%= name %></li>
        <% } %>
    </ul>


```

## Instagram page with EJS

- const instaData = require("./data.json);

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram</title>
    <style>
        img{
            height: 100px;
            width: 100px;
        }
    </style>
</head>
<body>
    <h2>This Page Belongs To @<%= data.name %></h2>
    <button id="follow">Follow</button>
    <button id="message">Message</button>

    <p>Followers: <%= data.followers %> &nbsp;&nbsp;&nbsp;&nbsp;
        Followers: <%= data.following %></p>
    
    <hr/>

    <% for(const post of data.posts) { %>
        <img src = "<%= post.image %>" alt="some img">
        <p>Likes: <%= post.likes %> &nbsp;&nbsp;&nbsp;&nbsp;
        Comments: <%= post.comments %>
        </p>
    <% } %>
</body>
</html>

```

```js

app.get("/ig/:username", (req, res) => {
    const {username} = req.params 
    const instagramData = require("./data.json");
    const data = instagramData[username];
    if(data) {
        res.render("instagram.ejs", {data});
    }
    
})
```


## Serving Static Files

- Serving static files means delivering fixed assets like HTML, CSS, JavaScript, and images directly to a user's browser without running server-side code. In Node.js with Express, you use app.use(express.static('public')) to serve a folder, mapping requests straight to those files.

- app.use(express.static("public"))

- You need to have a public naed folder like views for this. Public folder serves all the files.

- <link rel="stylesheet" href="/style.css">

- You must be in right directory for it to be applied. Its relative to the current working directory.  


- Or you can you this - app.use(express.static(path.join(__dirname, "public")));


## Includes(partials)

- Used to create subtamplates

- EJS (Embedded JavaScript) file, use the <%- include('PATH_TO_FILE') %> syntax. Always use the <%- tag (instead of <%=) to output raw, unescaped HTML content so your layout renders properly.

- ejs.co includes

- Create a new folder in views named includes and inside it create file head.ejs and paste the head part in it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram</title>
    <link rel="stylesheet" href="/style.css">
    
</head>
```
- <%- Outputs the unescaped value into the template

- <%- include("includes/head.ejs") %> WITHOUT SLASH

- Use this in instagram.ejs file or any other ejs files At the top of the file

- You can create a footerl.ejs similarly and add it above of the </body>

```html
<div style="background-color: lightblue;">
    Contact us at: Hello@abc
    Phone No: +91 XXXXXXXXX
</div>
```


## Spread the JSON object

- Once you understand what's happening, you can make it much shorter:

```js
app.get("/profile/:username", (req, res) => {
    const { username } = req.params;
    const portfolioData = require("./data.json");


    res.render("profile.ejs", {
        username,
        ...portfolioData
    });
});
```

- This is probably what you're looking for when you say "How do I combine data.json here?"

#### The ...portfolioData means:

- Take all the properties inside portfolioData and put them into this object.

So:

```js
{
    username,
    ...portfolioData
}

effectively becomes:

{
    username: "whatever-is-in-the-url",
    name: "Om Ekbote",
    role: "Aspiring System Researcher",
    about: "...",
    skills: [...],
    education: [...],
    research: true,
    researchInterests: [...]
}
```

- That's a very useful JavaScript pattern to learn. 🧠
