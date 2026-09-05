# Middleware

- It is an intermediary

- Request -> Middleware -> Response

- in Express: Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client

### Common Middleware functions

- methodOverride
- bodyParser
- express.static
- express.urlencoded
  Example:
  app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(\_\_dirname, "/public")));

### Properties

- Can access req, res object
- Chaining middlewares
- If middleware wants then it can send a response to stop the chaining

## What Do Middlewares Do?

Middleware functions can perform the followeing tasks:

- Execute any code

- Make changes to the request and the response objects

- End the request- response cycle

- Call the next middleware function in the stack

## Our 1st Middleware

- app.use(middleware)

```js
app.use(() => {
  console.log("Hi, I am a Middleware");
});
```

- using req and res object in middleware

## Using Next

- The next middleware function is commonly denoted by a variable named next

```js
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
});

app.use((req, res, next) => {
  console.log("Hi, I am middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Hi, I am 2nd middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});
app.get("/random", (req, res) => {
  res.send("This is a random page");
});
```

- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.

## Creating Utility Middleware

- Logger: Functions which log the useful info console print. Requests -> method(get, post, put), time of the log, hostname and more can be printed/logged

- Middleware Only works if we access before response. So We always write middleware at the start.

```js
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});
```

## app.use Callback

- Type: Function | Function[]

- Callback functions; can be: a middleware function, a series of middleware functions (separated by commas), an array of middleware functions, or a combination of all of the above.

```js
app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

//Logger - morgan

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

//404

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(8080, () => {
  console.log("Server Listening To Port 8080");
});
```

## API Token as Query String

- Lets create a middleware for an api that checks if the access token was passed in the query string or not.

```js
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIDED!");
});

app.get("/api", (req, res) => {
  res.send("data");
});

//http://localhost:8080/api?token=giveaccess
```

## Multiple Middlewares

```js
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIDED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});
```

## Handling Errors

- There are many types of error like syntax error

- Express Default Error Handler 

- Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.


### Custom Error Handling


```js
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new Error("ACCESS DENIDED!");
};
```