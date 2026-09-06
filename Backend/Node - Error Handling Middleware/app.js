const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIDED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
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

// app.use((err, req, res, next) => {
//   let { status, message } = err;
//   res.status(status).send(message);
// });

// app.use((req, res) => {
//   res.status(404).send("Page not found!");
// });

app.listen(8080, () => {
  console.log("Server Listening To Port 8080");
});
