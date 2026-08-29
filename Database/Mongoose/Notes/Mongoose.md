# Mongoose

- A library that creates a connection between MongoDB & Node.js JavaScript Runtime Environment

- It is an ODM (Object Data Modeling) Library.

- npm i mongoose

- const mongoose = require('mongoose');

- First Start mongosh in terminal then mongoose

```js
mongoose.connect("mongodb://127.0.0.1:27017/test");

//OR USE THIS

main().catch((err) => console.log(err));

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
```

## Schema

- Schema defines the shape of the documents within that collection.

```js
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
```

## Models

- Model in mongoose is a class with which we construct documents.

- We need to think about the names carefully and use singular not plural name for collection. Model and collection same name

```js

const User = mongoose.model("User", userSchema); //"User" is collection name here and User is model
const Employee = mongoose.model("Employee", userSchema);

show collections

//User becomes users in mongosh
//Product -> products
//Employee -> emploees
```

## Insert

### Inserting One

```js
const user1 = new User({ name: "Adam", email: "adam@yahoo.in", age: 22 });
const user2 = new User({ name: "Alina", email: "alina@google.in", age: 23 });

user1.save();

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
```

- User(Model -> class) // class -> objects, represents document here

<i>We use Insert One more than insert many. So focus on one more.</i>

### Inserting Multiple

```js
User.insertMany([
  { name: "Tony", email: "tony.gmail.com", age: 35 },
  { name: "Ed", email: "edgmail.com", age: 25 },
  { name: "Richard", email: "richardgmail.com", age: 23 },
]).then((res) => {
  console.log(res);
});
```

## Note

Mongoose uses Operation Buffering

- Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.

## Model Find

1. Model.find() //it does not return Promise but returns a Query Object (thennable)

- Mongoose Queries are not promises. But they have a .then()

```js
User.find({ age: { $lt: 25 } })
  .then((res) => {
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });
```

2. Model.findOne() // returns a single result

```js
User.findOne({ age: { $lt: 25 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOne({ _id: "6a8e8989abf79e29250c3a55" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

3. Model.findById() //returns query

```js
User.findById("6a8e8989abf79e29250c3a55")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Model Update

```js
Model.updateOne(); //returns query object

User.updateOne({ name: "Tony" }, { age: 29 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Model.updateMany();

User.updateMany({ age: { $lt: 23 } }, { age: 25 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### FindAndUpdate()

```js
Model.findOneAndUpdate();

User.findOneAndUpdate({ name: "Tony" }, { age: 27 }) //First finds it and then update
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// For updated/modified document to be return, you need to use options

User.findOneAndUpdate({ name: "Tony" }, { age: 27 }, { returnDocument: 'after' }) //[options. returnDocument]
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Model.findByIdAndUpdate();

User.findByIdAndUpdate('6a8e8989abf79e29250c3a57', {age: 24}) 
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## DELETE

```js
Model.deleteOne(); //return count

User.deleteOne({name: "Adam" }) 
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Model.deleteMany()

User.deleteMany({age: 25}) 
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


To return what is deleted use 

Model.findByIdAndDelete()

User.findByIdAndDelete('6a8e8989abf79e29250c3a57') 
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });



Model.findOneAndDelete()

User.findOneAndDelete({name: "Tony"}) 
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Schema Validations

- Basically, Rules for Schema


```js
const bookSchema = mongoose.Schema({
    title: {

    }
})

```

### Schema Types


- required: boolean or function, if true adds a required validator for this property  // It is equal to SQL     NOT NULL


- default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default. //DEFAULT in sql

- select: boolean, specifies default projections for queries
- validate: function, adds a validator function for this property
- get: function, defines a custom getter for this property using Object.defineProperty().
- set: function, defines a custom setter for this property using Object.defineProperty().
- alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
- immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.
enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.

```js
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 25,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: 100,
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String]
});
const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "YMPOV",
  author: "The One Who Was",
  price: "1200",
  category: "fiction",
  genre: ["Webnovel", "Transmigration", "Anti Villain"]
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "LOTM",
  author: "Cuttlefish",
  price: "2000", //Parsing/casting
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

```

## Schema Validations

- with UPDATE

- [options.runValidators] «boolean» if true, runs update validators on this command. Update validators validate the update operation against the model's schema

```js
Model.findByIdAndUpdate()


Book.findByIdAndUpdate("6a8f0ed6e15cf7f475e022d2", { price: -100 }, {runValidators: true}).then(
  (res) => {
    console.log(res);
  },
).catch((err) => {
    console.log(err);
})
```

## Schema Validations

- Handling Errors

- console.log(err.errors.category.properties.message);