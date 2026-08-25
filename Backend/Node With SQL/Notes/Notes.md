# Node With SQL

## Faker
To generate fake data

- userId username email password

- npm install --save-dev @faker-js/faker

```js
const { faker } = require('@faker-js/faker');

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(getRandomUser());
```

## MySQL2 Package
- To connect Node with MySQL

- npm i mysql2

```js
const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test', //We need to have a database created
  password: "Stanford3117"
});

```

- connection.end(); //to close connection

```js
try{
    connection.query("SHOW TABLES", (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}
```


## Using SQL from CLI

- source "D:/Programming/Web Development/Backend/Node With SQL/SQLCLASS/schema.sql"

- Create schema.sql  // files
- source schema.sql //in CLI

- connection.end(); //to close connection


## Create Table 

```js


CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

let query = "SHOW TABLES";


try{
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
    })
} catch (err) {
    console.log(err);
}
```


## Insert Into user

- Placeholders ?

```js


CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

let query = "INSERT INTO usesr(id, username, email, password) VALUES (?, ?, ?, ?)";
let user = ["123", "123_newuser", "abc@gamil.com", "abc"]


try{
    connection.query(query, user, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
    })
} catch (err) {
    console.log(err);
}





let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["1246", "1246_newuser", "abcd6@gamil.com", "abc"],          
  ["1245", "1245_newuser", "abcd5@gamil.com", "abc"]
];


try{
    connection.query(query, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}
```


## INSERT in Bulk


```js

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2")

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
}


// Inserting New Data

let query = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];

for(let i=1; i<=100; i++){
  data.push(getRandomUser()); //100 fake users data
}



try{
    connection.query(query, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err);
}

connection.end();

```


## Routing

- GET / show no of user in DB
- GET /user show users (email, id, username) ejs
- PATCH /user/:id username edit
- POST /user new user
- DELETE /user/:id user delete



## Setting up Express App

- GET/ Fetch and show total number of users on our app

```js
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))




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




app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});
```


## Creating Our Routes

- GET /user Fetch & show (userId, username, email) of all users

```js
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
```

```ejs
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Users</title>
    <style>
        table, tr, td, th {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Username</th>
        </tr>
    <% for(user of users){ %>
        <tr>
            <td><%= user.id %>  </td>
            <td> <%= user.email %> </td>
            <td> <%= user.username %> </td>
        </tr>
    <% } %>
    </table>
</body>
```


## Creating Our Routes

- GET /user/:id/edit To get form to edit the username, based on id This form will require a password

- PATCH /user/:id To edit username, if correct password was entered in form

1. search user based on id
2. check if form form.password = pass
3. update username