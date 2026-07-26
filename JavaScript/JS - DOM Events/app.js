// let buttons = document.querySelectorAll("button");
// console.dir(buttons)

// button.onclick = function() {
//     console.log("Be useful human to society")
//     alert("Be useful human to society")
// };

// for (button of buttons) {
//     // button.addEventListener("click", beUseful)
//     // button.addEventListener("click", toWorld)
//     button.addEventListener("dblclick", toWorld)
// };


// function beUseful() {
//     alert("Be Useful Human Being")
// };
// function toWorld() {
//     alert("Be Useful To The World")
// };


// let p = document.querySelector("p");

// p.addEventListener("click", () =>{
//     console.log("I am Fucking Useful")
// })

// let box = document.querySelector(".box")

// box.addEventListener("mouseenter", () =>{
//     console.log("Mirroring")
// })



// button.addEventListener("click", function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "cyan";
// })



// let h1 = document.querySelector("h1"); 
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "cyan";
// }


// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

// let button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//     console.log(event)
//     console.log("button clicked")
// });
// // button.addEventListener("dblclick", (event) => {
//     console.log(event)
//     console.log("button clicked")
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown", (event) =>{
//     // console.log("Key: ", event.key)
//     console.log("Code: ", event.key) //
//     if (event.code == "ArrowUp"){
//         console.log("Character moves Forward")
//     }
//     else if (event.code == "ArrowDown"){
//         console.log("Character moves Backward")
//     }
//     else if (event.code == "ArrowLeft"){
//         console.log("Character moves Left")
//     }
//     else if (event.code == "ArrowRight"){
//         console.log("Character moves Right")
//     }
// })




// let form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let email = document.querySelector("#email");
//     let password = document.querySelector("#pass");
    
//     console.log(email.value)
//     console.log(password.value)
// });



// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();


//     let email = this.elements[0]; // Writing this is equal to form.queryselector("#email") or form.elements[0]
//     let password = this.elements[1];
//     console.log(email.value)
//     console.log(password.value)
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });


// let email = document.querySelector("#email")

// email.addEventListener("change", function() {
//     console.log("change event");
//     console.log("Final Value: ", this.value)
// })
// email.addEventListener("input", function() {
//     console.log("input event");
//     console.log("Final Value: ", this.value)
// })



let p = document.querySelector("p")
let input = document.querySelector("#text");

input.addEventListener("input", function() {
    p.innerText = input.value
});