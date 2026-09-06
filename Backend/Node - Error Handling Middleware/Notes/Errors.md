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
class ExpressError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}
```
