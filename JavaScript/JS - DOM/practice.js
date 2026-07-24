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

let h1 = document.getElementById("title");
console.dir(h1);
console.log(h1);

let para = document.getElementsByClassName("info");
console.dir(para);
console.log(para);

let btn = document.getElementsByTagName("button");
console.dir(btn)
console.log(btn)

let btn1 = document.querySelector("body button");
console.dir(btn1);
console.log(btn1);

console.dir(document.querySelector("body li"));
console.log(document.querySelector("body li"));

console.dir(document.querySelector("ul"))

// getElementById() returns element as an object. getElementsByClassName() returns html as collection. querySelectorAll() returns first object match. well the difference I can see is nodelist displays all the properties just like an object does where as htmlcollection is like array with indexes and more. One more thing, I want these types of questions to be only objective not subjective answers with long answers. And i used both dir and log because I was a bit confused by print and I wanted to experiment too