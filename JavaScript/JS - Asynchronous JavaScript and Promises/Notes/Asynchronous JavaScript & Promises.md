# Asynchronous JavaScript & Promises

## Call Stack

<i>Last In First Out</i> 

```js
function hello() {
    console.log("inside hello fn"); //third
    consol.log("hello"); //fourth
}
function demo() {
    console.log("calling hello fn"); //second 
    hello()
}
console.log("calling demo fn"); // first
demo(); 
console.log("Done") // fifth
```

- All the callings are stored in stack
-  Call stack is a mechanism used by the JavaScript engine to track and manage the execution of functions in a single-threaded environment. It keeps tabs on which function is currently running, which functions are nested inside it, and what should be executed next.

## Visualizing the Call Stack

- Stack Frame:a temporary block of memory allocated on the JavaScript call stack whenever a function is invoked. It stores critical context needed to execute that specific function and manages where the engine should return after execution completes
- It uses a single call stack operating on a Last-In, First-Out (LIFO) basis. The most recently called function sits at the top of the stack, and its frame is the first to be destroyed (popped) when the function returns

```js

one = () => {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans =two() + one();
    console.log(ans);
}
```

## Breakpoints

- To set a breakpoint in JavaScript, you can either insert the debugger; statement directly into your source code or click the line numbers inside your browser's Developer Tools. Breakpoints pause your code mid-execution so you can inspect variables, check the call stack, and fix bugs without guessing.

## JS is Single Threaded

- It has only one call stack and one memory heap. It executes code sequentially, line by line, and can only perform one task at a time.
- Despite this limitation, JavaScript handles heavy operations like API requests seamlessly without freezing the user interface. This is achieved because the hosting runtime environment provides an asynchronous ecosystem around the language


### The Asynchronous Ecosystem

The Asynchronous EcosystemJavaScript delegates time-consuming tasks to the surrounding runtime environment (the web browser or Node.js). The environment handles the concurrency via several core components:
- Call Stack: Tracks the currently executing function using a Last-In, First-Out (LIFO) structure.
- Web APIs / Node APIs: Handles background background infrastructure tasks like setTimeout, network fetches, or file I/O operations.
- Callback Queue (Task Queue): Holds completed asynchronous callback operations waiting to be executed.
- Event Loop: Continuously monitors the Call Stack. If the stack is empty, it transfers the first task from the Callback Queue to the Call Stack for execution.

##  Callback Hell

- In JavaScript, callbacks are used for handling operations like reading files and making API requests. When there is excessive nesting of the functions it leads to a problem known as the callback hell. Due to this, it becomes difficult to read the code, debug, and maintain. But when we implement the promises and async/await it helps in improving the code.

EX1
```js
heading = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        heading.style.color = color;
        if(nextColorChange)
        nextColorChange();
    }, delay);
    
}
//Callback Nesting => Callback Hell
changeColor("darkred", 1000, () =>{
    changeColor("red", 1000, () =>{
        changeColor("darkred", 1000, () =>{
            changeColor("blue", 1000, );
        });
    });
});
```
EX2
```js
function saveToDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) +1;
    if(internetSpeed > 4){
        success();
        // console.log("your data was saved: ", data)
    } else {
        failure();
        
    }
}

saveToDb(
    "Stanford", 
    ()=>{
    console.log("Success1: Your data1 was saved");
    saveToDb("Be Useful Human Being", () =>{
        console.log("Success2: Your data2 was saved")
        saveToDb("Om MS @ Stanford", 
            () => {
                console.log("Success3: Your data3 was saved")
            }, 
            () => {
                console.log("failure3: Weak connection. Data3 not saved.")
            }
        )
    }, () => {
        console.log("failure2: Weak connection. Data2 not saved.")
    })
    },
    () => {
        console.log("Weak connection. Data not saved.");
    }
);
```


## Promises (Object)

The Promise object represents the eventual completion(or failure) of an asyunchronous operation and its resulting value.
- Promise is a special object that acts as a placeholder for a value that is not necessarily known when the promise is created, allowing you to manage asynchronous operations cleanly. It serves as an alternative to traditional callback functions, successfully preventing a deeply nested code structure known as "callback hell".

### Resolve and Reject

### The 3 States of a Promise
A promise always exists in one of three mutually exclusive states:Pending: 

- The initial state; the asynchronous operation is still actively running.
- Fulfilled: The operation completed successfully, yielding a resolved result value.
- Rejected: The operation failed, providing an error or reason for the failure.



```js

function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success1: Your data1 was saved");
        } else {
            reject("Failure: Weak connection. Data not saved.");
        }
    })
}


saveToDb("Stanford University");
Promise {<fulfilled>: 'Success1: Your data1 was saved'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "Success1: Your data1 was saved"

saveToDb("Stanford University");
Promise {<rejected>: 'Failure: Weak connection. Data not saved.'}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: "Failure: Weak connection. Data not saved."
app.js:112 Uncaught (in promise) Failure: Weak connection. Data not saved.
```

## Promise Methods

### then() & catch() & finally()

To handle the outcome of a promise, you use three primary instance methods:
- .then(): Runs when the promise is successfully fulfilled.
- .catch(): Runs if the promise is rejected or throws an error.
- .finally(): Runs cleanup logic after the promise is settled, regardless of success or failure.

```js
const fetchUserData = new Promise((resolve, reject) => {
  let success = true; // Simulating an operation outcome

  if (success) {
    resolve("User data successfully retrieved!"); // Sets state to Fulfilled
  } else {
    reject("Failed to fetch user data."); // Sets state to Rejected
  }
});


fetchUserData
  .then((result) => {
    console.log(result); // Logs: "User data successfully retrieved!"
  })
  .catch((error) => {
    console.error(error); // Logs the error if one occurred
  })
  .finally(() => {
    console.log("Operation complete."); // Always executes
  });
```

```js

let request = saveToDb("Stanford University"); //req = promise object

request
    .then(( )=>{
        console.log("promise was resolved");
        console.log(request);
    })
    .catch(() =>{
        console.log("Promise was rejected");
        console.log(request);
    });

OR COMPACT VERSION

let request = saveToDb("Stanford University").then(()=>{
        console.log("Promise was resolved");
    })
    .catch(() =>{
        console.log("Promise was rejected");
    });
```

## Promise Chaining (Improved Version Of Promises)

A technique used to execute a sequence of asynchronous operations back-to-back, where each subsequent operation starts only after the previous one succeeds. It prevents the messy nesting of functions known as callback hell.

Best Version So Far

```js
saveToDb("Stanford University")
    .then(()=>{
        console.log("Data1 saved.");
        return saveToDb("Om MS @ Stanford")
        })
        .then(()=>{
            console.log("Data2 saved.")
            return saveToDb("Bay Area, California")
        })
        .then(()=>{
            consolelog("Data3 saved.")
        })
    .catch(() =>{
        console.log("Promise was rejected");
    });
```

## Results and Errors in Promises

```js
saveToDb("Stanford University")
    .then((result)=>{
        console.log("Data1 saved.");
        console.log("Result of promise" ,result);
        return saveToDb("Om MS @ Stanford")
        })
        .then((result)=>{
            console.log("Data2 saved.")
            console.log("Result of promise" , result);
            return saveToDb("Bay Area, California")
        })
        .then((result)=>{
            console.log("Data3 saved.");
            console.log("Result of promise" ,result);
        })
    .catch((error) =>{
        console.log("Promise was rejected");
        console.log("Error of promise" ,error);
    });
```

## Refactoring Old Code

```js

heading = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            heading.style.color = color;
            resolve("Color changed");
        }, delay);        
    });
}

changeColor("darkred", 1000)
.then(() => {
    console.log("Darkred printed");
    return changeColor("red", 2000);
})
.then(() => {
    console.log("red printed");
    return changeColor("darkred", 2000);
})
.then(() =>{
    console.log("Darkred printed");
})

```
