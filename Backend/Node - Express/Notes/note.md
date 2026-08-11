# NODE : EXPRESS

## Library v/s Framework

- Library: A library is a collection of pre written code that can be used to perform specific task. Ex: axios

- Framework: A framework is a set of pre-written code that provided a structure for developing software applications. Ex: express

## Express
A Node.js web application framework that helps us to make web applications.

- It is used for server side programming.

### Uses
- Listen for incoming requests.
- Parse the request.
- Match response with routes(Like /help, /home /search and more)
- Suitable response according to response.


```js
const express = require("express") // Express is a fuction here
const app = express();
const port = 3000; // 8080

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

- app.listen listens to the incoming requests

- <b>Ports</b> are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

- ctrl + c to stop the server

- localhost:3000

## Handling Requests

- app.use: app.use() is used to register middleware functions within your application's request-response lifecycle. It acts as a gateway that intercepts incoming HTTP requests, allowing you to execute code, modify request/response properties, or block execution before a final route handler takes over.


```js
const express = require("express");
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log("App is listening on Port", port);
});

app.use((req, res) => {
    console.log("Request received")
})
```


## Sending a Response

In Express.js, the Request (req) and Response (res) objects are the two fundamental components passed to route handlers to handle communication between the client and server.
Here is a comprehensive overview of how to interact with both objects, as detailed in the Express.js API Reference.

## The Request Object (re  ) 
The  object represents the incoming HTTP request from the client (e.g., browser, mobile app). It contains details like parameters, headers, and body data. 

• req.body: Contains data submitted in the request body (requires middleware like express.json()). 
• req.params: Holds route parameters extracted from the URL path (e.g.,  → req.params.id). 
• req.query: Parses URL query string parameters (e.g.,  → req.query.q). 


## The Response Object (res) 
The  object represents the HTTP response that the Express application transmits back to the client. It controls headers, status codes, and the payload. 

• res.send(): Sends a basic HTTP response (string, object, arrays, html, or buffer). 
```js
res.send(Buffer.from('whoop'));
res.send({ some: 'json' });
res.send('<p>some html</p>');

```

## Routing

- It is process of selecting a path for traffic in a network or between or accross multiple networks.
- It determines how an application’s endpoints (URIs) respond to client requests. You define routes using methods of the Express app object that correspond to HTTP methods (e.g., app.get(), app.post()).

```js
const express = require('express');
const app = express();

// Handle a GET request to the homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Handle a POST request to the /submit path
app.post('/submit', (req, res) => {
    res.send('Data received!');
});

// Requesting: /users/42
app.get('/users/:id', (req, res) => {
    const userId = req.params.id; 
    res.send(`User ID requested: ${userId}`);
});

```

- For same path we can only send one response.

## Application Object

The **Express.js Application Object** (conventionally denoted as `app`) is the core instance of an Express application. It is created by calling the top-level `express()` function exported by the Express module. 

It is responsible for **routing HTTP requests**, **configuring application settings**, **registering middleware**, and **starting the server**.

```javascript
const express = require('express');
const app = express(); // This is the application object
```

### Core Responsibilities

#### 1. Routing HTTP Requests
The application object maps incoming client requests to specific handler functions based on the HTTP method and URL path.
* `app.get(path, callback)` – Handles HTTP GET requests.
* `app.post(path, callback)` – Handles HTTP POST requests.
* `app.put(path, callback)` – Handles HTTP PUT requests.
* `app.delete(path, callback)` – Handles HTTP DELETE requests.
* `app.all(path, callback)` – Matches all HTTP methods for a specific path.

#### 2. Registering Middleware
Middleware functions execute during the request-response cycle. You bind them to the application object using `app.use()`.
* `app.use(middleware)` – Mounts global, application-level middleware.
* `app.use('/api', router)` – Mounts routers to modularize paths.

#### 3. Application Settings Configuration
The application object manages inner server settings, behavior configurations, and data sharing.
* `app.set(name, value)` – Assigns a setting configuration value (e.g., `app.set('view engine', 'pug')`).
* `app.get(name)` – Retrieves a configuration value.



```js
app.get("/", (req, res) =>{
    res.send("you contacted root path")
})

app.get("/apple", (req, res) =>{
    res.send("you contacted apple path")
})

app.get("/mango", (req, res) =>{
    res.send("you contacted mango path")
})

app.get("/*splat", (req, res) => { // All the paths exluding the above
    res.send("This page does not exits")
}) 
```

## Nodemon

- To automatically restart server with code changes

- nodemon index.js


## Path Parameters

- req.params

```js
app.get("/", (req, res) =>{
    res.send("you contacted root path.")
})
app.get("/:username/:id", (req, res) =>{
    let { username, id} = req.params
    const htmlString = `<h1>Welcome to the page of @${username}!</h1>`
    res.send(htmlString)
})

http://localhost:3000/apple/123

Welcome to the page of @apple!

```

## Query Strings

- req.query

```js
app.get("/", (req, res) =>{
    res.send("you contacted root path.")
})
app.get("/:username/:id", (req, res) =>{
    let { username, id} = req.params
    const htmlString = `<h1>Welcome to the page of @${username}!</h1>`
    res.send(htmlString)
})

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no results");
})

localhost:3000/search?q="apple"

no results

[Object: null prototype] { q: '"apple"' }

localhost:3000/search?q="apple"&color=green

[Object: null prototype] { q: '"apple"', color: 'green' }

app.get("/search", (req, res) => {
    let { q } = req.query
    res.send(`<h1>search results for query: ${q}</h1>`);
})
```



## <i><b>Params are baked into the route path. Query is extra information attached to the URL.</b></i>

## Examples

```js

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
```

```js

const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on the Port: ${port}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to Campus Library");
});
app.get("/about", (req, res) => {
    res.send("About Campus Library");
});
app.get("/contact", (req, res) => {
    res.send("Contact Campus Library");
});

app.get("/users/:username/:id", (req, res) => {
    const {username, id} = req.params;
    const greeting = `<b>Welcome ${username}! Your user ID is ${id}</b>`
    res.send(greeting)
})


app.get("/search", (req, res) => {
    const {q , author} = req.query;
    res.send(`<b>Searching for ${q} by ${author}</b>`)
})

app.get("/books/:category", (req, res) => {
    const {category} = req.params;
    res.send(`<i>Books in ${category} category</i>`)
})



app.post("/books", (req, res) => {
    res.send("New book submitted successfully")
})

app.get("/*splat", (req, res) => {
    res.send("404 - Page Not Found")
})


app.get("/", (req, res) => {
    res.send("Campus Library");
});

app.get("/books/:category", (req, res) => {
    const { category } = req.params;
    res.send(`Books: ${category}`);
});

app.get("/search", (req, res) => {
    const { q, type} = req.query;
    res.send(`Searching for: ${q}
Type: ${type}`);
});

app.post("/books", (req, res) => {
    res.send("Book added");
});

app.get("/students/:name", (req, res) => {
    const {name} = req.params
    res.send(`Welcome ${name}!!`);
});

app.put("/books", (req, res) => {
    res.send("Book updated")
})
app.delete("/books", (req, res) => {
    res.send("Book deleted")
})

```