# DOM EVENTS

- Events are signals that something has occurred.(users input / actions)

1. onclick (When an element is clicked)


2. onmouseenter (When mouse enters an element)



```js
let buttons = document.querySelectorAll("button");
console.dir(buttons)

button.onclick = function() {
    console.log("Be useful human to society")
    alert("Be useful human to society")
};

for (button of buttons) {
    button.onclick = beUseful  //Here we don't use () for fuction because it gets executed immediatly
    button.onmouseenter = () =>{
    console.log("Be useful to the society");
    }
}


function beUseful() {
    alert("Be Useful")
}
```


## Event Listener

### addEventListener

- element.addEventListner(event, callback)  (NO LIMIT)

event ex: click, drag, keyboard key, dblclick etc.

<i>This works even on clicking text not just buttons.</i>

```js

button.addEventListener("click", function () {
    console.log("Be Useful Human To Society)
});

```

### <b>this</b> in Event Listeners

- When 'this' is used in a callback of event handler of something, it refers to that something.

obj -> event listener(event, callback(Here this is 'this' meaning that specific object or something that event handler(listener) is created))

<i> Used when we have: multiple types of object ke upar ek single event listener ko use karna cahate he</i>


```js
let button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(this);
    console.dir(this.innerText)
})

<button>Click Me!</button> //console log
Click Me! // console log when clicked
```

```js

let h1 = document.querySelector("h1"); 
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "cyan";
}

button.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h2.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);

//Use this instead of writing this multiple times ->

button.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "cyan";
})
```


### Keyboard Events

<i> No matter which key you press it will count as +1</i>

1. keydown
- Fired when a key is pressed.

2. keypress 
- Fired when a key that produces a character value is pressed down.

3. keyup
- Fired when a key is released.

<i>Keep in Mind: KeyboardEvent properties code("KeyA" returns code like "space") and key("a" it shows visible key on screen)</i>

```js
let input = document.querySelector("input");

input.addEventListener("keydown", (event) =>{
    console.log(event)
    console.log("Key: ", event.key)
    console.log("Code: ", event.code) //
})
```

### Form Events

1. submit
- The submit event fires when a form is submitted.

2. event.preventDefault()
- if we want to stay in same page. It prevents default action

### Extracting Form Data

<i>value property stores the input of user</i>

```js
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.querySelector("#email");
    let password = document.querySelector("#pass");

    //OR USE THIS

    let email = this.elements[0]; // Writing this is equal to form.queryselector("#email") or form.elements[0]
    let password = this.elements[1];


    console.log(email.value)
    console.log(password.value)
});
```

<i><b>Be Careful when using ARROW Function and this </b></i>

```js
// Traditional function: 'this' dynamically binds to the form
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(this.elements[0].value); // Works because 'this' is the form
});

// Arrow function: 'this' points to the outer scope (window). 
// We use event.target instead!
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.elements[0].value); // Works because event.target is the form
});


const button = document.querySelector("#btn");

button.addEventListener("click", (event) =>{
    button.style.backgroundColor = "green";
    button.style.color = "white";
    console.log("Button was clicked!");
    // this.style.border = "3px solid black";  If you use traditional function
    event.target.style.border = "3px solid black";
});
```

### More Important Events

1. change event
- The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).

<b>After(after typing anything) we leave the input box and click or do any action then the change occurs. It is a
event fires when an input loses focus after its value changed</b>

```js
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});


let email = document.querySelector("#email")

email.addEventListener("change", function() {
    console.log("change event");
    console.log("Final Value: ", this.value)
})
```

2. input event
- The input event fires when the <b>value</b> of an <input> <textarea> and <select> element has been changed.

<i>Even the simplest change as typing any letter fires this event. But NON Character doesn't fire this event</i>


### Event Bubbling

- Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements. . The order goes from the inner target element to the outer root element.

<b>Fixing the problem with stopPropagation()</b>

```HTML
<body>
    <div>
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    </div>
    <script src="app.js"></script>
</body>
```

```js
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
```

### Event Delegation

- Event delegation is a design pattern where you attach a single event listener to a parent element to manage events for all of its current and future child elements. This technique works by leveraging <i>event bubbling</i>, a mechanism where an event triggered on a nested element propagates upwards through its ancestors in the DOM tree

