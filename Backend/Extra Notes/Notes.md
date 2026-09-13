
# Important Concepts

- The JavaScript ternary operator (also called the conditional operator) is a concise, three-part shorthand used to write simple if...else statements. It evaluates a condition and returns one value if that condition is true, and another if it is false.
```js
condition ? expressionIfTrue : expressionIfFalse;
```

- 🛠️ Setters (set)Setters intercept data when you assign a value to a field. Use them to enforce formatting, normalize data, or hash values.

```js
const userSchema = new mongoose.Schema({
  // Automatically convert email to lowercase before saving
  email: {
    type: String,
    set: v => v.toLowerCase()
  }
});
```
- How it works: If you run user.email = 'JOHN@Example.com', Mongoose runs the setter function and actually saves 'john@example.com' to the database.

- 🔍 Getters (get)Getters intercept data when you access a field. Use them to format raw database data for user display without changing the stored data.

```js
productSchema = new mongoose.Schema({
  // Store prices as integers (cents) to avoid floating-point errors
  priceInCents: {
    type: Number,
    get: v => (v / 100).toFixed(2) // Convert to dollar string on read
  }
});
```
- How it works: If the database stores 1999, accessing product.priceInCents will return "19.99".






## Form Validations

- When we enter data in the form, the browser and/or the web server will check to see that the data is in the <i>correct format and within the contraints set</i>  by the application.

- client front-> back
- Server -> db(schema)

- novalidate class in form and then js logic from bootstrap. Create a new folder js in public


## Success & Failure Text

- Success if okay and If validation fails then failure text

## Validation for Schema

- joi.dev api it is an npm package which helps in Schema Validation
- It is for server side schema validation

```js
const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.string().required().min(0),
    image: Joi.string().allow("", null),
  }).required(),
});

```

### Middleware

