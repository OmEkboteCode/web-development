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

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  //   res.send("ACCESS GRANTED");
  throw new ExpressError(403, "Access to Admin is Forbidden");
});

// app.use((err, req, res, next) => {
//   res.status(err.status).send(err.message);
// });

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

app.use((err, req, res, next) => {
  let { status = 500, message = "SOME ERROR" } = err;
  res.status(status).send(message);
});

app.get(
  "/items/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let item = await findItem(id);
    if (!item) {
     throw new ExpressError(404, "Item Not Found");
    }
    res.send(item);
  }),
);

function findItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id === "1") {
        resolve("Item Found");
      } else {
        resolve(null);
      }
    }, 500);
  });
}

// app.use((err, req, res, next) => {
//   console.log("-----Error 1-----");
//   next(err);
// });

// app.use((err, req, res, next) => {
//   console.log("-----Error 2-----");
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(500).send("Page Not Found");
// });

// app.get("/api", checkToken, (req, res) => {
//   res.send("data");
// });

// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// app.get("/random", (req, res) => {
//   res.send("This is a random page");
// });

// app.get("/err", (req, res) => {
//   abcd = abcd;
// });

// app.get("/admin", (req, res) => {
//     throw new ExpressError(403, "Access to Admin is Forbidden")
// })

// app.use((err, req, res, next) => {
//   let { status=500, message="SOME ERROR OCCURRED" } = err;
//   res.status(status).send(message);
// });

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
