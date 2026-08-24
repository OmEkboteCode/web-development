
const express = require(`express`);
const app = express();
const mysql = require(`mysql2`);
const path = require(`path`);
const methodOverride = require(`method-override`);


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"))



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'user_management',
    password: 'Stanford3117'
});




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

app.get("/user", (req, res) => {
    let query = "SELECT * FROM users";
    try {
        connection.query(query, (error, users) => {
            if(error) throw error;
            res.render("showusers.ejs", {users})
        })
    } catch(error){
        console.log(error);
        res.send("some error in DB")
    }
})


app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let query = `SELECT * FROM users WHERE id= '${id}'`;
        try{
            connection.query(query, (error, result) => {
                if (error) throw error;
                let user = result[0];
                res.render("edit.ejs", {user});
            })
        } catch(error){
            console.log(error);
            res.send("some error in DB");
        }
});


app.listen("3000", () =>{
    console.log("Listening to port: 3000")
});