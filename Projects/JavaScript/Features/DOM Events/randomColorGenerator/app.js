let button = document.querySelector("button");



button.addEventListener("click", function() {
    let heading = document.querySelector("h3");
    let randomColor = getRandomColor();
    heading.innerText = randomColor;
    heading.style.color = randomColor
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;


    console.log("color updated")
})


const getRandomColor = () =>{
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}