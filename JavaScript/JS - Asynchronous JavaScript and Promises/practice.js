// function greet() {
//     console.log("Hello");
// }

// function start() {
//     console.log("Start Function");
//     greet();
// }

// console.log("Program Started");

// setTimeout(() => {
//     console.log("Timer Finished");
// }, 1000);

// start();

// console.log("Program Ended");

//Program Started
// Start Function
// Hello
// Program Ended
// Timer Finished

//Call Stack

//start() 
//greet()
//After log hello
// greet()
//start()
// global

// B)LIFO
//B) Web APIs / Runtime Environment (its just a guess I don't know the answer)
// Callback Queue
// B) The Call Stack becomes empty


// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve(`Data Saved: ${data}`)
//         } else {
//             reject("Weak Connection")
//         }
//     });
// }


// saveToDb("Book A")
//     .then((result) =>{
//     console.log(result);
//     return saveToDb("Book B");
//     })
//     .then((result) =>{
//     console.log(result);
//     return saveToDb("Book C");
//     })
//     .catch((error) =>{
//     console.log(error);
//     });
    

// function printMessage(message, delay) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log(message)
//             resolve("Done")
//         }, delay);
//     })
// }

// printMessage("Loading...", 1000)
//     .then((result) =>{
//        return printMessage("Connecting...", 1000)
//     })
//     .then((result) =>{
//        return printMessage("Success!", 1000)
//     })
//     .catch((error) =>{
//         console.log("Something went wrong", error)
//     })

heading = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            heading.style.color = color;
            resolve("Change Changed", color)
        }, delay);
    });
}

changeColor("darkred", 1000)
    .then((result)=> {
        console.log(result);
        return changeColor("red", 1000)
    })
    .then((result)=>{
        console.log(result)
    })