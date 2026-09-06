const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.time);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Hello, This is No. 1");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Hello, This is No. 2");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Hello, This is No. 3");
//   next();
// });

// const checkToken = (req, res, next) => {
//   let { token } = req.query;
//   if( token === "giveaccess") {
//     next()
//   } else{
//     res.send("ACCESS DENIED")
//   }
// };

// app.get("/admin", checkToken, (req, res) => {
//   res.send("ACCESS GRANTED");
// });

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

app.use("/admin", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else throw new Error("ACCESS DENIED!");
});

app.get("/admin", (req, res) => {
  res.send("ACCESS GRANTED");
});

app.get("/read", (req, res) => {
  res.send(req.time);
});
app.get("/posts", (req, res) => {
  res.send("This is the post");
});
app.get("/issues", (req, res) => {
  res.send("This is the issue");
});

app.use((req, res) => {
  res.status(404).send("Page not found!");
});

app.listen(3000, () => {
  console.log("Server Listening To Port 3000");
});
