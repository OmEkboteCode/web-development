let gameSequence = [];
let userSequence = [];

let buttons = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let headingTwo = document.querySelector("h2");
// let button = document.querySelector(".button")

document.addEventListener("keydown", () =>{
    if (started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

let gameFlash = (button) => {
    button.classList.add("flash");
    setTimeout(() => {
        button.classList.remove("flash");
    }, 200);
}
const userFlash = (button) => {
    button.classList.add("userFlash");
    setTimeout(() => {
        button.classList.remove("userFlash");
    }, 200);
}

let levelUp = () => {
    userSequence = [];
    level++;
    headingTwo.innerText = `Level ${level}`;

    const randomIdx = Math.floor(Math.random() * 4);
    const randomColor = buttons[randomIdx];
    const randomButton = document.querySelector(`.${randomColor}`);

    gameSequence.push(randomColor);
    console.log(gameSequence);
    gameFlash(randomButton);
}


// function buttonPress() {
//     console.log(this)
// }
buttonPress = (event) => {
    let button = event.target;
    userFlash(button);
    userColor = button.getAttribute("id");
    userSequence.push(userColor);


    checkSequence(userSequence.length - 1);
}

let allButtons = document.querySelectorAll(".button");

for(button of allButtons) {
    button.addEventListener("click", buttonPress)
}


checkSequence = (idx) => {
    if (userSequence[idx] === gameSequence[idx]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp, 1000)
        }
    } else {
        headingTwo.innerHTML = `Game Over!! Your score was <b>${level * 2}</b> <br> Press any Key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 50);
        reset();
    }
    
}

const reset = () => {
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}