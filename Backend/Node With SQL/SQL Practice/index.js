const {faker} = require(`@faker-js/faker`);
const express = require(`express`);
const app = express();
const mysql = require(`mysql2`);
const path = require(`path`);
const methodOverride = require(`method-override`);


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),

  ];
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'user_management',
    password: 'Stanford3117'
});

let query = `INSERT INTO users (id, username, email, password) VALUES ?`





app.get("/", (req, res) => {
    let query = `SELECT count(*) FROM users`
    try {
    connection.query(query, (error, result) => {
        if(error) throw error;
        let count = result[0]["count(*)"]
        res.render("home.ejs", {count})
        
    })
} catch(error){
    console.log(error);
};
});


app.listen("3000", () =>{
    console.log("Listening to port: 3000")
});