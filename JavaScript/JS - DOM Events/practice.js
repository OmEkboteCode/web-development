//C1

// const button = document.querySelector("#btn");

// button.addEventListener("click", (event) =>{
//     button.style.backgroundColor = "green";
//     button.style.color = "white";
//     console.log("Button was clicked!");
//     // this.style.border = "3px solid black";  THis is the answer for part D if I had used traditional function so I didn't know how to uses this for arrow function so i looked into it and found event.target
//     event.target.style.border = "3px solid black";
// });

// const box = document.querySelector("#box");

// box.addEventListener("mouseenter", () =>{
//     box.innerText = "Mouse Inside";
// });

// box.addEventListener("mouseleave", () =>{
//     box.innerText = "Hover Me";
// });


// I think it will print second only like I had seen an example though not of addEventListener but inline where you can only log one value so we use addeventlistener but here it is one after another instead of both logs in one handler, though I am not sure it also feels like it might be first then second both print.
// B) addEventListener() B) mouseout B) The element that triggered the event


//C2

// const input = document.querySelector("#keyboardInput");
// const lastKey = document.querySelector("#lastKey");
// const lastCode = document.querySelector("#lastCode");

// input.addEventListener("keypress", (event) =>{
//     lastKey.innerText =`Last Key: ${event.key}`;
//     lastCode.innerText = `Code : ${event.code}`;
//     input.style.border = "2px solid steelblue";
//     if (
//     event.key === "Shift" ||
//     event.key === "Control" ||
//     event.key === "Alt"
//     ) {
//     return;
//     }
// });

// input.addEventListener("keyup", (event) => {
//     console.log("Key released!");
// });


//C) A then B  B) keydown B) event.code A) event.key


//C3

//Part 2 has concepts which i don't know yet like regex and more and also the loop method for this is not quite long and will be brute-forcing it

// const preview = document.querySelector("#preview");
// const username = document.querySelector("#username");
// let form = document.querySelector("form");

// username.addEventListener("input", (event) =>{
//     preview.innerText = `Username: ${username.value}`
// });

// form.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     // console.log(preview.innerText);
//     if (username.value.trim() === "") {
//        console.log("Username: Anonymous");
//     } else{
//         console.log(username.value);
//     }
// });

// username.addEventListener("change", () =>{
//     console.log("Input Changed")
// })

// B) Done then Submitted B) input
// I dont know what do you mean by loses focus here I feel like change is the answer since event occurs when the value of an element has been changed.
//A) preventDefault()


// C4

// const feedbackForm = document.querySelector("#feedbackForm");
// const studentNameInput = document.querySelector("#studentName");
// const feedback = document.querySelector("#feedback");
// const status = document.querySelector("#status");

// feedback.addEventListener("input", () =>{
//     status.innerText = "Typing feedback...";
// });

// studentNameInput.addEventListener("change", () => {
//     console.log("Name Updated");
// });
// feedback.addEventListener("change", () => {
//     console.log("Feedback Updated");
// });


// feedbackForm.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     console.log("Student Name: ",studentNameInput.value);
//     console.log("Feedback: ",feedback.value);
//     status.innerText = "Feedback Submitted!";
//     studentNameInput.value = "";
//     feedback.value = "";
// });

// // should after clearing field Should typing show "Typing feedback..." or "Waiting for feedback..."? Those two messages seem to conflict. It creates a genine ambiguity, So I will put a hold on it

// //B)
// // Typing...
// // Typing...
// // Typing...
// // Typing...
// // Changed
// // B) input 
// // I don't know for sure but shraddha in sigma class said that it stops the default action from happening so the answer should be C) To stop JavaScript execution. Where it pauses the execution, whereas other ooptions doesn't do that right?
// //C) Both run in the order they were added.


//C5
const form = document.querySelector("#feedbackForm");
const nameInput = document.querySelector("#studentName");
const feedbackInput = document.querySelector("#feedback");
const status = document.querySelector("#status");

nameInput.addEventListener("change", () => {
    status.innerText = "Typing name...";
});

feedbackInput.addEventListener("input", () => {
    status.innerText = "Typing feedback...";
});

form.addEventListener("submit", () => {
    console.log("Student:", nameInput.value);
    console.log("Feedback:", feedbackInput.value);

    status.innerText = "Feedback Submitted!";

    nameInput.value = "";
    feedbackInput.value = "";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

feedbackInput.addEventListener("change", () => {
    console.log("Feedback updated");
});

nameInput.addEventListener("input", () => {
    console.log("Name updated");
});


// This code is similar to the previous challenge where we ask students name and their feedback and log them into console  and after submitting it clears both fields. I don't what you mean by user experience here, after opening page user can start typing name and feedback and when user is typing the staus changes according to which field user is typing and after submitting both fields get cleared and new feedback can be taken again.
//When user types alice in name field the status changes to typing name and feedback works similar to typing name, here status changes to typing feedback, and after leaving the eithe field and doing any action(Like clicking anywhere else) the console logs as name updated or feedback updated according to the field typed. After submitting, the status changes to feedback submitted and both fields get cleared for new feedback, and in console, student name and feedback value is loggged.
//The bugs here are using input in place of change for when name updated and for typing name status it should be input becuase every type counts as typing. Maybe the preventDefault could be done in the same form handler instaed of creating two handler for this feature. I don't know about other bugs here, everything seems okay maybe its logic bug.
//Maybe naming of constants and not repeating the handler for preventdefault for this code not sure about long codes though