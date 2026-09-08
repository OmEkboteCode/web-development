const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/admin", (req, res) => {
  throw new ExpressError(404, "Access to Admin is Forbidden");
});

app.get(
  "/items/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let item = await findItem(id);
    if(!item) {
        throw new ExpressError(404, "Item Not Found")
    }
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
//   let { status=500, message="SOME ERROR OCCURRED" } = err;
//   res.status(status).send(message);
// });

app.use((err, req, res, next) => {
    let { status=500, message="SOME ERROR OCCURRED" } = err;
    res.status(status).send(message);
})

app.listen(8080, () => {
  console.log("Server Listening To Port 8080");
});
