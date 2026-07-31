// function hello() {
//     console.log("inside hello fn");
// }
// function demo() {
//     console.log("calling hello fn");
//     hello()
// }

// console.log("calling demo fn");

// demo(); 

// console.log("Done")

// one = () => {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans =two() + one();
//     console.log(ans);
// }

// three();

// heading = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         heading.style.color = color;
//         if(nextColorChange)
//         nextColorChange();
//     }, delay);
    
// }
// //Callback Nesting => Callback Hell
// changeColor("darkred", 1000, () =>{
//     changeColor("red", 1000, () =>{
//         changeColor("darkred", 1000, () =>{
//             changeColor("blue", 1000, );
//         });
//     });
// });







// setTimeout(() => {
//     changeColor("darkred");
// }, 1000);


// setTimeout(() => {
//     changeColor("red");
// }, 2000);
// setTimeout(() => {
//     changeColor("darkred");
// }, 3000);
// setTimeout(() => {
//     changeColor("red");
// }, 4000);

// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if(internetSpeed > 4){
//         success();
//         // console.log("your data was saved: ", data)
//     } else {
//         failure();
        
//     }
// }

// saveToDb(
//     "Stanford", 
//     ()=>{
//     console.log("Success1: Your data1 was saved");
//     saveToDb("Be Useful Human Being", () =>{
//         console.log("Success2: Your data2 was saved")
//         saveToDb("Om MS @ Stanford", 
//             () => {
//                 console.log("Success3: Your data3 was saved")
//             }, 
//             () => {
//                 console.log("failure3: Weak connection. Data3 not saved.")
//             }
//         )
//     }, () => {
//         console.log("failure2: Weak connection. Data2 not saved.")
//     })
//     },
//     () => {
//         console.log("Weak connection. Data not saved.");
//     }
// );



// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success1: Your data1 was saved");
//         } else {
//             reject("Failure: Weak connection. Data not saved.");
//         }
//     })
// }

// let request = saveToDb("Stanford University").then(()=>{
//         console.log("Data1 saved.");
//         saveToDb("Om MS @ Stanford").then(()=>{
//             console.log("Data2 saved.")
//         })
//     })
//     .catch(() =>{
//         console.log("Promise was rejected");
//     });
// saveToDb("Stanford University")
//     .then((result)=>{
//         console.log("Data1 saved.");
//         console.log("Result of promise" ,result);
//         return saveToDb("Om MS @ Stanford")
//         })
//         .then((result)=>{
//             console.log("Data2 saved.")
//             console.log("Result of promise" , result);
//             return saveToDb("Bay Area, California")
//         })
//         .then((result)=>{
//             console.log("Data3 saved.");
//             console.log("Result of promise" ,result);
//         })
//     .catch((error) =>{
//         console.log("Promise was rejected");
//         console.log("Error of promise" ,error);
//     });


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

// //Callback Nesting => Callback Hell
// changeColor("darkred", 1000, () =>{
//     changeColor("red", 1000, () =>{
//         changeColor("darkred", 1000, () =>{
//             changeColor("blue", 1000, );
//         });
//     });
// });
