const { faker } = require('@faker-js/faker');
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
        res.send("some error in DB");
    }
});


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

app.get("/user/:id/email", (req, res) => {
    let {id} = req.params;
    let query = `SELECT * FROM users WHERE id= '${id}'`
    try{
        connection.query(query, (error, result) => {
            if(error) throw error;
            let user = result[0];
            res.render("editemail.ejs", {user});
        });
    } catch(error){
        console.log(error);
        res.send("some error in DB");
    }
})

app.patch("/user/:id/email", (req,res) => {
    let {id} = req.params;

    let {formPassword, newEmail} = req.body;
    let query = `SELECT * FROM users WHERE id='${id}'`;
    try{
        connection.query(query, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPassword != user.password){
                return res.send("Wrong Password")
            } else {
                let query2 = `UPDATE users SET email='${newEmail}' WHERE id='${id}'`;
                connection.query(query2, (error, result) => {
                    if(error) throw error;
                    res.redirect("/user");
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }

});






app.patch("/user/:id/username", (req,res) => {
    let {id} = req.params;

    let {formPassword, newUsername} = req.body;
    let query = `SELECT * FROM users WHERE id='${id}'`;
    try{
        connection.query(query, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPassword != user.password){
                return res.send("Wrong Password")
            } else {
                let query2 = `UPDATE users SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(query2, (error, result) => {
                    if(error) throw error;
                    res.redirect("/user");
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }

});


app.get("/user/new", (req, res) => {
    res.render("newuser.ejs");
});


app.post("/user", (req, res) => {
    let {newUsername, email, password} = req.body;
    let id = faker.string.uuid();
    let values = [[id, newUsername, email, password]];
    let query = `INSERT INTO users (id, username, email, password) VALUES ?`
    try {
        console.log(query);
        console.log(values);
        connection.query(query, [values], (error, result) => {
            if (error) throw error;
            console.log(result);

            res.redirect("/user");
        })
    } catch(error) {
        console.log(error);
    }
    
});

app.delete("/user/:id", (req, res) => {
    let {id} = req.params;
    let query = `DELETE FROM users WHERE id='${id}'`;
    try {
        connection.query(query, (error, result) => {
            if(error) throw error;
            console.log(result);
            res.redirect("/user");
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen("3000", () =>{
    console.log("Listening to port: 3000");
});