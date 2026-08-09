// Q2 • CommonJS Module

// Now we're going one step beyond the lecture example.

// Create:

// math.js
// app.js
// math.js

// Export three functions:

// add(a, b)
// multiply(a, b)
// square(n)
// app.js

// Import the module using:

// require()

// Then use the exported functions to produce:

// Add: 15
// Multiply: 50
// Square: 49

// For example, the inputs could be:

// add(10, 5)
// multiply(10, 5)
// square(7)


const math = require("./math");

console.log(math.add(10, 5));
console.log(math.multiply(5, 10));
console.log(math.square(7));

