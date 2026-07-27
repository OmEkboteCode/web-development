const addTaskInput = document.querySelector("input");
const addButton = document.querySelector("#addButton");
const lists = document.querySelector("ul")



addButton.addEventListener("click", () =>{
    const newTask = document.createElement("li");
    newTask.innerText = addTaskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete")
    newTask.appendChild(deleteButton);

    
    
    lists.append(newTask);
    addTaskInput.value = "";
});

const deleteButtons = document.querySelectorAll(".delete")

// for ( deleteButton of deleteButtons) {
//     deleteButton.addEventListener("click", function () {
//         const parent = this.parentElement;
//         console.log(parent);
//         parent.remove()
//     })
// }


lists.addEventListener("click", (event) =>{
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    } 
})