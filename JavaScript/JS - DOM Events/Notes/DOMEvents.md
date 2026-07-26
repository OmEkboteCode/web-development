#DOM EVENTS

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

- element.addEventListner(event, callback)

```js
button.addEventListener("Click", function () {
    console.log("Be Useful Human To Society)
});