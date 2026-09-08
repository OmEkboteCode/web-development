# Errors

## Custom Error Handlers

- Error Handling Middleware

```js
app.use((err, req, res, next) => {
  console.log("------ERROR-------");
  next(err);
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  console.log("------ERROR 1-------");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("------ERROR 2 Middleware-------");
  next(err);
});
```

## Writing Error Handlers

Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next).

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

## Error Class

- Custom

```js
// Create a ExpressError.js file
class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use((err, req, res, next) => {
  let { status = 500, message } = err;
  res.status(status).send(message);
});

app.use((err, req, res, next) => {
  let { status = 500, message = "SOME ERROR" } = err;
  res.status(status).send(message);
});
```

## Error Class

- Create an admin route & send an error waith 403 status code

```js
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to Admin is Forbidden");
});
```


## Handling Async Errors

```js
// New - Show Route
app.get("/chats/:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    return next(new ExpressError(404, "Chat Not Found"));
  }
  res.render("edit.ejs", { chat });
});
```

1. id -> doesn't exist
2. validation error -> error in rules constraints decided 

## Using wrapAsync

1. Normal Errors
2. Async -> ExpressError
3. try-catch (bulky)
4. wrapAsync -> wrap the callback


here we create new function wrapasync(function1) { <br>
  return function2(req, res, next){ <br>
    function1(req, res, next).catch(err) <br>
  }
}

## Mongoose Errors

```js

const handleCastErr = (err) => {
  console.log("This was a Cast error. Please follow rules");
  console.dir(err.message);
  return err;
};
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "CastError") {
    err = handleCastErr(err);
  }
  next(err);
});

```