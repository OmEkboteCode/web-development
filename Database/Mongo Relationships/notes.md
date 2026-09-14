# Mongo Relationships

## SQL (via Foreign Keys)

- one to one (1x1)

- one to many (1xn)

- many to many (nxn)

## Mongo Relationships

### One to Many / Approach 1(one to few)

- Store the child document inside parent

```js
const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

{
    _id: objectId("651d234drgr34ewr433t5534"),
    username: `Richard`,
    addresses: [
        {location: `221B Baker Street`, city: `London`},
        {location: `P36 DownTown`, city: `London`},

    ],
    __v: 1
},
```

### One to Many / Approach 2

- Store a reference(pointer->id) to the child document inside parent

- Example: Customers-> details(ids) Orders

```js
const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Steve",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result = await cust1.save();
  console.log(result);
};

addCustomer();
```

### One to Many (Populate)

- Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).

```js
const addCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};
addCustomer();
```



### One to Many / Approach 3 (One to Squillions)

- Store a reference to the parent document inside child


```js

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = new User({
    username: "Jensen",
    email: "jensen@gmail.com",
  });
  let post2 = new Post({
    content: "Nvidia Wins",
    likes: 897987
  })

  post2.user = user1;

  await user1.save();
  await post1.save();
};


addData();



const addData = async () => {
  let user = await User.findOne({username: "Jensen"})
  let post2 = new Post({
    content: "This is the Best Ai chip you will ever find",
    likes: 109092
  })

  post2.user = user;

  await post2.save();
};


addData();


const getData = async () => {
  let result = await Post.find({}).populate("user");
  console.log(result);
};

const getData = async () => {
  let result = await Post.find({}).populate("user", "username");
  console.log(result);
};


getData();



const movieSchema = new Schema({
  title: String,
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
});

const actorSchema = new Schema({
  name: String,
  age: Number,
});

const Movie = mongoose.model("Movie", movieSchema);
const Actor = mongoose.model("Actor", actorSchema);

const addMovie = async () => {
  const movie1 = new Movie({
    title: "Intersteller",
  });
  const actor1 = new Actor({
    name: "Matthew McConaaughey",
    age: 56,
  });
  const actor2 = new Actor({
    name: "Anne Hathaway",
    age: 43,
  });
  const actor3 = new Actor({
    name: "Jessica Chastain",
    age: 49,
  });

  await actor1.save();
  await actor2.save();
  await actor3.save();

  movie1.cast.push(actor1._id);
  movie1.cast.push(actor2._id);
  movie1.cast.push(actor3._id);

  let result = await movie1.save();
  console.log(result);

  let result1 = await Movie.findOne({title: "Intersteller"}).populate("cast", "name age");
  console.log(result1.cast.map(actor => actor.name));
  console.log(result1.cast);
};

addMovie();


```


### To Read (Docs)

- 6 Rules of Thumb for MongoDB Schema Design

- https://www.mongodb.com/company/blog/mongodb/6-rules-of-thumb-for-mongodb-schema-design

- Database denormalization rules of thumb: Your guide through the rainbow
Here are some “rules of thumb” to guide you through these innumerable (but not infinite) choices:

- One: Favor embedding unless there is a compelling reason not to. <b>Approach 1</b> 

- Two: Needing to access an object on its own is a compelling reason not to embed it.

- Three: Arrays should not grow without bound. If there are more than a couple of hundred documents on the “many” side, don’t embed them; if there are more than a few thousand documents on the “many” side, don’t use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed. (<100s: embed, if >100s: array objId ref, if >1000s: parent)


- Five: Consider the read-to-write ratio with denormalization(duplicate it and store in another). A field that will mostly be read and only seldom updated is a good candidate for denormalization. If you denormalize a field that is updated frequently then the extra work of finding and updating all the instances of redundant data is likely to overwhelm the savings that you get from denormalization.

- Six: As always with MongoDB, how you model your data depends entirely on your particular application’s data access patterns. You want to structure your data to match the ways that your application queries and updates it.