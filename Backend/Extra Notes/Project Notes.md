## Handling Deletion

using Mongoose Middleware

- We can use 2 middlewares:
- Pre-run before the query is executed
- Post-run after the query is executed

```js
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});
```

## Mongoose Middlewares

- Query middleware is supported for the following Query functions. Query middleware executes when you call exec() or then() on a Query object, or await on a Query object. In query middleware functions, this refers to the query.

- countDocuments
- deleteMany
- deleteOne
- distinct
- estimatedDocumentCount
- find
- findOne
- findOneAndDelete
- findOneAndReplace
- findOneAndUpdate
- replaceOne
- updateOne
- updateMany
- validate

- findByIdAndDelete automatically calls findOneAndDelete ->Mongoose Middleware

```js
customerSchema.pre("findOneAndDelete", async () => {
  console.log("PRE MIDDLEWARE");
});
customerSchema.post("findOneAndDelete", async () => {
  console.log("POST MIDDLEWARE");
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

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

// customerSchema.pre("findOneAndDelete", async () =>{
//   console.log("PRE MIDDLEWARE")
// })
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
};

const addCustomer = async () => {
  let newCustomer = new Customer({
    name: "Draven",
  });

  let newOrder = new Order({
    item: "Burger",
    price: 200,
  });
  newCustomer.orders.push(newOrder);

  await newOrder.save();
  await newCustomer.save();

  console.log("Added New Customer");
};

const delCus = async () => {
  let data = await Customer.findByIdAndDelete("6aa610817733435d6fabe9f2");
  console.log(data);
};

// addCustomer();
delCus();
```

## New Model: Reviews

- comment
- rating(1-5)
- createdAt

## Create Reviews

1. Setting up the Reviews Form

2. Submitting the Form -> review add -> POST /listings/:id/reviews

## Validations For Reviews

1. Client (form)
2. Server (joi)

## Render Reviews

- populate it

## Deleting Reviews

- Mongo $pull operator

- this operator removes from an existing array all instances of a value or values that match a specified condition

## Deleting Listing

- Delete Middleware for Reviews

## Express Router

- Express Routers are a way to organize your Express application such that our primary app.js file does not become bloated

- const router = express.Router() //Creates new router object

- Look for the common symbols used in the path

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET for users");
});

router.get("/:id", (req, res) => {
  res.send("GET for users id");
});

router.post("/", (req, res) => {
  res.send("POST for users");
});

router.delete("/:id", (req, res) => {
  res.send("Delete for users");
});

module.exports = router;

const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/", (req, res) => {
  res.send("Hi, I am Root!");
});

app.use("/users", users); // saying that /users will be common part and users here is routes
app.use("/posts", posts);

app.listen(4000, () => {
  console.log("Sever is listening to 4000");
});
```

### Restructuring Reviews And Listings

```js
app.use("/listings/:id/reviews", reviews);
router = express.Router({ mergeParams: true });
```

## Cookies

### Web Cookies

- HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by user's web browser

## How to Send Cookies

### In Express

```js
app.get("/setcookies", (req, res) => {
  res.cookie("great", "namaste");
  res.cookie("origin", "india");
  res.send("We Send You a Cookie!");
});
```

## Cookie Parser

### cookie-parser package

- req.cookies
- Type: Object

- When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, it defaults to {}.

```js
// Cookie: name=tj
console.dir(req.cookies.name);
// => "tj"
```

- If the cookie has been signed, you have to use req.signedCookies.

- For more information, issues, or concerns, see cookie-parser.

- npm install cookie-parser

```js
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/getcookies", (req, res) => {
  res.cookie("great", "hello");
  res.cookie("origin", "us");
  res.send("We Send You a Cookie!");
});

app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies;
  res.send(`Hi, ${name}!`);
});
```

## Signed Cookies

- Used to prevent tampering

```js
// Send Signed Cookie

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req, res) => {
  res.cookie("color", "Black", { signed: true });
  res.send("signed cookie sent");
});

//Verify Signed Cookie

app.get("/verify", (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("Verified");
});
```

## What is State?

### State Prototcol

- Stateful Protocol require server to save status and session information
- eg: ftp(file transfer protocol)

### Stateless Protocol

- Stateless Protocol does not require the server to retain the information or
- eg: http

## Express Sessions

- An attempt to make our session stateful

- npm install express-session

- Create a session middleware with the given options.

- const session = require("express-session");

```js
app.use(
  session({
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
  }),
);

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You sent a request ${req.session.count} times`);
});
```

### Storing & Using Info

```js
app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  console.log(req.session.name);
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.send(`hello, ${req.session.name}`);
});
```

## Connect-flash

- The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user

- npm install connect-flash

- It is temporary only. one time.

```js
app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  req.flash("success", "User Registered Successfully");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name, msg: req.flash("success") });
});
```

## res.local

```js
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
});

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
```

## Using Sessions

### Adding Cookie Options

```js
const sessionOptions = {
  secret: "MySecretCode",
  resave: false,
  saveUninitialized: true,
  cookies: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
```

### Using Flash

```js
const sessionOptions = {
  secret: "MySecretCode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.get("/", (req, res) => {
  res.send("Working");
  new Listing();
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  next();
});

router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  }),
);
```

### Success And Error Partial

- Create a flash.ejs in includes

## Authentication

- Authentication is the process of verifying who someone is (sign in/login)

## Authorization

- Authorization is the process of verifying what specific applications, files, and data a user has access to

## Storing Passwords

- We NEVER store the passwords as it is. We store their hashed form(unreadable string) -> Hashing Function

## Hashing

What we need to know?

- For every input, there is a fixed output
- They are one-way functions, we can't get input from output
- For a different input, there is a different output but of same length
- Small changes in input should bring large changes in output

## Salting (Adding string)

- Password salting is a technique to protect passworeds stored in databases by adding a string of 32 or more characters and then hashing them.

- ex: abc -> abc%?@, helloworld%?@ -> hashedform

## Passport

Passport is Express-compatible authentication middleware for Node.js.

- npm i passport
- npm i passport-local
- npm i passport-local-mongoose (when using mongodb)

## User Model

- user: username, password, email

- You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.

- User.plugin(passportLocalMongoose);

## Configuring Strategy

use after app.use(session(sessionOptions))

### passport.initialize()

- A middleware that initializes passport

### passport.session()

- A web application needs the ability to identify users as they browse from page to page. This series of requests and responses, each associated with the same user, is known as a session.

### passport.use(new LocalStrategy(User.authenticate()))

- it is to use static authenticate method of model in LocalStrategy
- authenticate() Generates a function that is used in Passport's LocalStrategy

### Serialize and Deseriallize

- serializeUser() Generates a function that is used by Passport to serialize users into the session
- deserializeUser() Generates a function that is used by Passport to deserialize users into the session

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

## Demo

```js
app.get("/demouser", async (req, res) => {
  let fakeUser = new User({
    email: "student@gmail.com",
    username: "sigma-student",
  });

  let registeredUser = await User.register(fakeUser, "Helloworld");
  res.send(registeredUser);
});
```

- register(user, password, cb) Convenience method to register a new user instance with a given password. Checks if username is unique. (cb-> callback)

## Signup User

- GET /signup -> signup form
- POST /signup

## Login User

- GET /login -> form
- POST /login

## Connecting Login Route

How to check if User is Logged in?

- req.isAuthenticated() //Passport method

## Logout User

- GET /logout use passport

```js
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You Are Logged Out!");
    res.redirect("/listings");
  });
});
```

### Adding Styling

- Here req.user -> undefined(means user is not logged in) show sign up and login option
- if req.user -> object(logged in) show logout

## Login After SignUp

- Passport's login method automatically establishes a login session
- We can invoke login to automatically login a user

## Post-login Page

```js
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome Back To WonderLand!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  },
);

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You Must Login In To Create Listing!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
```

## Listing Owner

- listing -> owner propery in schema

```js
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  }),
);

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

```

## Starting With Authorization

- currUser and listing.owner.\_id

## Setting Authorization

### For Listing

```js
const Listing = require("./models/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You Must Login In To Create Listing!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You Are Not The Owner Of This Listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errorMessage = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errorMessage = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};
```

### For Reviews

```js
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing You Requested For Does Not Exist");
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  }),
);

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created!");
    console.log("New Review Saved");

    res.redirect(`/listings/${listing._id}`);
  }),
);
```

## MVC: Model, View, Controller

- Implement Design Pattern for Listings

- You can mention MVC when explaining the project on platform like linkedin to showcase your skills

## Router.route

- combine routes which have same path

```js
router
  .route("/")
  .get("/", wrapAsync(listingController.index))
  .post(
    "/",
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createListing),
  );
```

## Re-style Ratings

- Use Starability https://github.com/LunarLogic/starability/tree/master

## Image Upload

- Send files X
- Size Limit

1. Form capable of sending files
2. 3rd Party Service-> To save file -> give url/link
3. Save this link in mongo

## Manipulating Form

- entype="multipart/form-data"

- use multer npm

## Cloud Setup

- cloudnary and .env file(used to store our environment variables/credentials)

- npm i dotenv

```js
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
```

## Store Files

- Multer Store Cloudinary
- npm i cloudinary multer-storage-cloudinary
- npm install cloudinary@1.41.3 multer-storage-cloudinary

```js
//cloudConfig.js

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wonderland_DEV",
    allowedFormat: ["png", "jpg", "jpeg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
```

## Save Link In Mongo

- Modify Image in Schema

- we will save file link and filename

## Stars in genesis

- $addToSet : Add this value to the array, but don't add it if it's already there.
- $pull: Remove this value from the array.

## Edit Listing Image

- Edit Form

- Image preview for edit page

## Getting Started With Maps

### Display A Map

- Mapbox GL JS

## Geocoding

- Geocoding is the process of converting addresses (like a street address) into geographic coordinates ( like latitude and longitude), which you use to place markers on a map, or postion the map

- Geocoder api or even better github mapbox sdkjs npm install @mapbox/mapbox-sdk

- Refer Documentation

```js
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
```

## Storing Coordinates

- GeoJSON is a format for storing geographic points and polygons. MongoDB has excellent support for geospatial queries on GeoJSON objects.

- GeoJSON: The most simple structure GeoJSON is a point. below is an example point representing the approximate location of San Francisco. Now that longitude comes first in a GeoJSON coordinate array, not latitude

```js
{
  "type": "Point",
  "coordinate": {
    -22.5,
    37.7
  }
}

geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
```

### Map Marker

```js
const coordinates = "<%- JSON.stringify(listing.geometry.coordinates) %>";

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates) //Listing.geometry.coordinates
  .addTo(map);
```

### Marker Popup

```js
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  `<h4>${listing.location}</h4><p>Exact Location Provided After Booking</p>`,
);

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
  .setPopup(popup)
  .addTo(map);
```

## Add Filters

- Add if you are interested

```js
  categories: {
    type: String,
    enum: ["mountains", "arctic", "farms", "deserts"],
  },
```

## Add Tax Swtich

## Mongo Atlas

- Cloud Database Service
- Database. Deploy a multi-cloud database

- image-> cloud service
- DB-> internet/cloud

## Mongo Store

- npm install connect-mongo
- const { MongoStore } = require("connect-mongo");

## Deployment

- render
- netlify
- cyclic etc.