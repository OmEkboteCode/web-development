# Async/Await, APIs & HTTP Communication

## Async Functions

- A special type of function that simplifies working with asynchronous operations (like fetching data, reading files, or setting timers). It is a <b>cleaner wrapper around JavaScript Promises</b>, allowing you to write asynchronous code that looks and reads like synchronous code.

### Async Keyword
The async keyword marks a function as asynchronous, enabling it to return a promise and use the await keyword to run non-blocking operations. Also apply then and catch method.

```js
async function greet() {
    return "Hello!";  //Returns a promise
}

let hello = async () => {}; // Returns a promise

CONSOLE

greet();
Promise {<fulfilled>: 'Hello!'}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"Hello!"


Arrow Function
let headingColor = async (color) => {
    heading.style.color = color;
    return "Changed";
}
```

If function is 
- Normal execute then promise is fulfilled + return
- Error/mistake execute then promise is rejected + return

```js
async function greet() {
    throw "this is used to throw error"
    return "Hello!";
}

```

### Await Keyword
 The await keyword in JavaScript is used to <i>pause</i> the execution of an asynchronous function until a Promise settles (either resolves or rejects). It extracts the fulfillment value directly from the Promise, allowing you to write clean, asynchronous code that looks and behaves like readable, synchronous code.



