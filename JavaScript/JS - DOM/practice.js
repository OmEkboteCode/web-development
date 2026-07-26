// // document.createElement('p')

// let para = document.createElement("p")

// para.innerText =  "Hey I'm RED!"

// // para.style.color = "red"


// // let body = document.querySelector("body")
// // body.appendChild(para)

// document.querySelector("body").append(para)

// para.classList.add("red")

// //2 

// let h3 = document.createElement("h3")

// h3.innerText = "I'm a Blue h3!";

// document.querySelector("body").append(h3)

// h3.classList.add("blue")

// //3

// let div = document.createElement("div");
// div.classList.add("divStyle");

// let h1 = document.createElement("h1");
// h1.innerText = "I'm in a div";
// div.append(h1);

// let para1 = document.createElement("p");
// para1.innerText = "ME TOO!";
// div.append(para1);

// document.querySelector("body").prepend(div)



// C1

// let h1 = document.getElementById("title");
// console.dir(h1);
// console.log(h1);

// let para = document.getElementsByClassName("info");
// console.dir(para);
// console.log(para);

// let btn = document.getElementsByTagName("button");
// console.dir(btn)
// console.log(btn)

// let btn1 = document.querySelector("body button");
// console.dir(btn1);
// console.log(btn1);

// console.dir(document.querySelector("body li"));
// console.log(document.querySelector("body li"));

// console.dir(document.querySelector("ul"))

// getElementById() returns element as an object. getElementsByClassName() returns html as collection. querySelectorAll() returns a NodeList containing all matching elements. well the difference I can see is nodelist displays all the properties just like an object does where as htmlcollection is like array with indexes and more.

//C2

// const h1 = document.querySelector("#heading");
// h1.innerText = "DOM Practice";
// h1.classList.add("purple");
// h1.classList.contains("purple")

// const input = document.querySelector("input");
// input.setAttribute("placeholder", "Username");

// const button = document.querySelector("button");
// button.setAttribute("id", "btn");
// console.dir(button.getAttribute("id"));

// // const button = document.querySelector("#btn");
// button.classList.add("buttonStyle")


// const paragraph = document.querySelector("p");
// paragraph.innerHTML = "Apna College <b>Sigma</b> Practice"


// button.classList.add("highlight", "rounded")

// innerHTML interprets HTML tags. setAttribute changes an attribute. To add CSS class use classList.add


// C3

// const body = document.querySelector("body");

// const input = document.createElement("input");
// input.setAttribute("type", "text")
// input.setAttribute("placeholder", "Enter announcement");
// input.setAttribute("id", "annoucement");

// const button = document.createElement("button")
// button.innerText = "Add"

// body.append(input);
// input.insertAdjacentElement("afterend", button);

// const paragraph = document.createElement("p");
// paragraph.innerText = "JavaScript DOM is Awesome!";
// const div = document.querySelector("#board")
// div.append(paragraph);

// const h2 = document.createElement("h2");
// h2.innerText = "Latest Updates";
// div.insertAdjacentElement("beforebegin", h2);

// const firstParagraph = document.querySelector("p");
// firstParagraph.remove();

// console.log(div.parentElement);
// console.log(div.children);
// console.log(div.previousElementSibling);
// console.log(div.nextElementSibling);

//createElement creates element. remove(). children


//C4

// const board = document.querySelector("#board");

// const h2 = document.createElement("h2");
// h2.innerText = "Latest Notices";

// board.insertAdjacentElement("beforebegin", h2);

// const paragraph1 = document.createElement("p");
// const paragraph2 = document.createElement("p");
// const paragraph3 = document.createElement("p");

// paragraph1.innerText = "Complete Module 9";
// paragraph2.innerText = "Practice DOM";
// paragraph3.innerText = "Push code to Git";

// board.append(paragraph1, paragraph2, paragraph3);


// paragraph1.classList.add("notice");
// paragraph2.classList.add("notice");
// paragraph3.classList.add("notice", "important");


// const hr = document.createElement("hr");
// board.insertAdjacentElement("beforeend", hr);

// const oldNotice = document.querySelector("#oldNotice");
// oldNotice.remove()

// console.log(board.parentElement);
// console.log(board.childElementCount);
// console.log(board.firstElementChild);
// console.log(board.lastElementChild);

// I don't know about this questionm append places at the end so before(), though I haven't learnt it yet. firstElementChild. lastElementChild. As for challenge 5, make parts of it too and include debugging where there are 2-4 bugs, But don't make challenge 5 too big


const board = document.querySelector("#board");

const title = document.createElement("h2");
title.innerText = "Latest Notices";

board.append(title);

const notices = [
    "Complete Module 9",
    "Practice DOM",
    "Push code to Git"
];

notices.forEach((notice) => {
    const p = document.createElement("p");
    p.innerText = notice;
    p.classList.add("notice");

    board.appendChild(p);
});

const line = document.createElement("hr");
document.body.append(line);

const oldNotice = document.querySelector(".oldNotice");
oldNotice.remove();

const paragraphs = document.querySelector("p");

paragraphs.classList.add("important");

console.log(board.parentElement);
console.log(board.children);

// Wow this is a upgraded version of our previous challenge and I like it a lot and its much more readable and clean and also much more efficient. We start with selecting the id board and then create element h2 where it stores inner text "Latest Notices". Then its appended inside board. Here the constant notices is amazing too where the paragraphs are stored in array and then appended later on. forEach here is working and doing many important tasks like creating element p and the "notice" inner text for all using forEach and the array notices and then appending them in board. Here you wrote line for hr and I like it too instead of just naming it hr, here you create hr element and append it in body which places it at the end. Then you create constant oldNotice to select it and remove it easily. Later you created constant paragraphs to select p and then added class important. At the end you printed parent element and children of board. 
// The bugs here I don't know for sure but I feel like const paragraphs doesn't do its job of class adding to the final paragraph and it adds class important to all p. Here h2 is placed at the end instead of beforebegin. Here to select oldNotice you need to use # for id. I don't see anymore, There must be more.
//I don't know how to improve this already improved version than my code and I learnt a lot