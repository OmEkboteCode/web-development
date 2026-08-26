const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({name: "Tony"}) 
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


// User.findById('6a8e8989abf79e29250c3a55')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.insertMany([
//     {name: "Tony", email: "tony.gmail.com", age:35},
//     {name: "Ed", email: "edgmail.com", age:25},
//     {name: "Richard", email: "richardgmail.com", age:23},
// ]).then((res) => {
//     console.log(res);
// });

// const user2 = new User({name: "Alina", email: "alina@google.in", age: 22});

// user2
//     .save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
