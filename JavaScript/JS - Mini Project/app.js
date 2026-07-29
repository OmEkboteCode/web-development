const div = document.querySelector("div");
const ul = document.querySelector("ul");
const lists = document.querySelectorAll("li");

div.addEventListener("click", (event) =>{
    event.stopPropagation();
    console.log("div was clicked");
})
ul.addEventListener("click", (event) =>{
    event.stopPropagation();
    console.log("ul was clicked");
})

for(list of lists){
    list.addEventListener("click", (event) =>{
        event.stopPropagation();
        console.log("List was clicked")
    })
}