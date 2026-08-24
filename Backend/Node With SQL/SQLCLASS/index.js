const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sigma_app',
  password: "Stanford3117"
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ]
};


// Inserting New Data

let query = "INSERT INTO user (id, username, email, password) VALUES ?";





app.get("/", (req, res) => {
  let query = `SELECT count(*) FROM user`;
  try{
    connection.query(query, (err, result) => {
        if (err) throw err;
        let count = result[0]["count(*)"]
        res.render("home.ejs", {count});
    })
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}

});


//Show Route

app.get("/user", (req, res) => {
  let query = `SELECT * FROM user`;
    try{
    connection.query(query, (err, users) => {
        if (err) throw err;
        res.render("showusers.ejs", { users })
        // res.send(result);
    })
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}

});


// Edit route

app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let query = `SELECT * FROM user WHERE id='${id}'`;
      try{
    connection.query(query, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("edit.ejs", {user})
    })
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}
});


//Update(DB) Route

app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password, formPassword, newUsername} = req.body;

    let query = `SELECT * FROM user WHERE id='${id}'`;
    try{
      connection.query(query, (err, result) => {
        if (err) throw err;
        let user = result[0];
        if(formPassword != user.password){
          return res.send("Wrong Password");
        } else {
          let query2 = `Update user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(query2, (err, result) => {
            if(err) throw err;
            res.redirect("/user")
          })
        }
      })
} catch (err) {
    console.log(err);
    res.send("some error in DB")
}
})


app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});


