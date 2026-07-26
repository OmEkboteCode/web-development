let buttons = document.querySelectorAll("button");
console.dir(buttons)

// button.onclick = function() {
//     console.log("Be useful human to society")
//     alert("Be useful human to society")
// };

for (button of buttons) {
    button.onclick = beUseful  //Here we don't use () for fuction because it gets executed immediatly
    console.dir(button)
    button.onmouseenter = () =>{
        console.log("Be useful to the society");
    }
}


function beUseful() {
    alert("Be Useful")
}

