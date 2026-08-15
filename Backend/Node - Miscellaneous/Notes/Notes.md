# Miscellaneous

## GET

- Used to GET some response(like search in google)

- Data sent in query strings(limited, string data & visible in URL like passwords and sensitive data)

## POST 

- Used to POST something (for Create/Write/Update/Upload)(like google drive uploading files)

- Data sent via request body(any type of data)(No limit)

```html
<form method="get" action="/register">
<form method="POST" action="/register">

    
```


## Handling GET Requests

```js
app.get("/register", (req, res) => {
    let {user, password} = req.query
    res.send(`Standard GET response. Welcome, ${user}`);
});


```

## Handling POST Requests

- Set up POST request route to get some response

```js
app.post("/register", (req, res) => {
    res.send("Standard POST response");
});
```

- Parse POST request data(its a standard line whenever we use POST request)

```js

app.use(express.urlencoded({extended: true}));
app.use(express.json()); //IF you send json from post request body
{
  "user": "Glacier",
  "password": 19909
}

app.post("/register", (req, res) => {
    let {user, password} = req.body
    res.send(`Standard POST response. Welcome, ${user}`);
});
```

## OOPS (Revisiting JS)
Object Oriented Programming
<br>

To structure our code(Something like blueprint named class)

- Prototypes

- New Operator

- Constructors

- Classes

- Keywords(Extends, Super)


## Object Prototypes

Prototypes are the mechanism by which JS objects inherit features from one another.
<br>
It is like a single template object that all objects inherit methods and properties from without having their own copy.

- arr.__proto__(reference)  
<br>
 arr.__proto__ is a property that points to the internal prototype ([[Prototype]]) of an array instance arr. For a standard array, arr.__proto__ references Array.prototype, giving the array access to built-in methods like .push(), .pop(), and .map().

 ```js
 // Changing the definition of push
array.push(4);
4
array.__proto__.push = (n) => {console.log("Pushing number: ", n)}
(n) => {console.log("Pushing number: ", n)}
array.push(4);
VM533:1 Pushing number:  4
```

- Array.prototype(actual object)

- String.prototype

<br>
Every object in JS has a built in property, which is called its prototype. The prototype is itself an object, so the prototype  will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype

```js

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
array1.sayHello = () => {  
    console.log("Hello!, I am Array")
}
array2.sayHello = () => {  // New function created
    console.log("Hello!, I am Array")
}

array1.sayHello === array1.sayHello;
true
array1.sayHello === array2.sayHello;
false
```

## Factory Functions(We won't be using  it.)
- A function that creates objects.


```js

function personMaker(name, age){
    const person = {
        name: name, 
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}


let p1 = personMaker("adam", 25);
undefined
p1
{name: 'adam', age: 25, talk: ƒ}

//Drawback
let p1 = personMaker("adam", 25); //copy
let p2 = personMaker("jenny", 25); //copy
p1.talk === p2.talk
false
```

## New Operator

- The new operator lets developers create an instance(new objects) of a user-defined object type or of one of the built-in object types that has a constructor function

- Constructor always starts from capital letter. It doesn't return anything


```js
// Constructors. 

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`)
}

let p1 = new Person("Adam", 25);
let p2 = new Person("Jenny", 25);

HERE THIS MEANS p1 AND p2
```

- This is good but a bit tricky and not suitable for day to day uses. There exists even better way.


## Classes

Classes are a template for creating objects.
<br>
The constructor method is a special method of a class for creating and initializing an object instance of that class.


```js

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk() {
    console.log(`Hi, my name is ${this.name}`)
    }

}



let p1 = new Person("Adam", 25);
let p2 = new Person("Jenny", 25);
```

## Inheritance

Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

- Extend in used to inherit properties




```js
class Person {
    constructor(name, age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`)
    }
}


class Student extends Person {
    constructor(name, age, marks){
        console.log("Student class constructor");
        super(name, age)   // Here super means the parent class constractor. parent class constacotor is being called
        this.marks = marks;
    }
}

// let student1 = new Student("adam", 25, 90);

class Teacher extends Person {
    
    constructor(name, age, subject){
        console.log("Teacher class constructor");
        super(name, age)   // Here super means the parent class constractor. parent class constacotor is being called
        this.subject = subject;
    }
}


let student1 = new Student("adam", 25, 90);
app.js:68 Student class constructor
app.js:56 Person class constructor
undefined
student1.marks
90
student1.name
'adam'
```

```js
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}


class Cat extends Mammal {
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("Meoww..")
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Wooff..")
    }
}

let dog1 = new Dog("Truffle");
let cat1 = new Cat("Eva");


cat1
Cat {name: 'Eva', type: 'warm-blooded'}name: "Eva"type: "warm-blooded"[[Prototype]]: Mammalconstructor: class Catmeow: ƒ meow()[[Prototype]]: Object
cat1.name
'Eva'
cat1.type
'warm-blooded'

﻿
dog1
Dog {name: 'Truffle', type: 'warm-blooded'}
name
: 
"Truffle"
type
: 
"warm-blooded"
[[Prototype]]
: 
Mammal
bark
: 
ƒ bark()
constructor
: 
class Dog
[[Prototype]]
: 
Object
constructor
: 
class Mammal
eat
: 
ƒ eat()
[[Prototype]]
: 
Object
```

- Overriding

```js
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}


class Cat extends Mammal {
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("Meoww..")
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Wooff..")
    }
    eat(){
        console.log("dog is eating")
    }
}

let dog1 = new Dog("Truffle");
let cat1 = new Cat("Eva");

dog1.eat
```


# JavaScript (OOP) Summary Sheet

## Q1. What is Object-Oriented Programming (OOP)?

**Answer:**  
Object-Oriented Programming (OOP) is a programming paradigm in computer science that relies on the concept of **classes and objects**.

It is used to structure a software program into simple, reusable pieces of code blueprints (usually called **classes**), which are used to create individual instances of **objects**.

---

## Q2. What are some benefits of using OOP in JavaScript?

**Answer:**  
Some benefits of using OOP in JavaScript include:

- **Improved code organization** (structure of code)
- **Reusability of code**
- **Better maintainability of code**
- **Closeness to real-world objects**

---

## Q3. What is the difference between an object and a class in JavaScript?

**Answer:**  

An **object** in JavaScript is a standalone entity with properties, methods, and a type. It can be created directly, from functions, or through constructor functions.

A **class** in JavaScript acts as a **blueprint for creating objects**.

---

## Q4. What is a constructor function in JavaScript?

**Answer:**  
A **constructor function** is a special function that is used to create and initialize objects in JavaScript.

When a new object is created using a constructor function, it is automatically assigned a set of properties and methods that are defined within the function.

---

## Q5. What is a prototype chain in JavaScript?

**Answer:**  
Every object in JavaScript has a built-in property called its **prototype**.

The prototype is itself an object, so the prototype can have its own prototype. This creates what is called a **prototype chain**.

The chain ends when we reach a prototype whose own prototype is `null`.

---

## Q6. What is the difference between a constructor and a class in JavaScript?

**Answer:**  

A **constructor** is a function that creates an object, while a **class** is a blueprint for creating objects.

- **Class:** Defines the framework/blueprint.
- **Constructor:** Creates and initializes objects.

> **Note:** In JavaScript, classes are syntactic sugar over JavaScript's prototype-based inheritance and constructor functions.

---

## Q7. Why is the `new` keyword used in JavaScript?

**Answer:**  
The `new` keyword is used to **create an instance of an object**.

When used with a constructor function, it:

1. Creates a new object.
2. Sets the constructor function's `this` keyword to point to the new object.
3. Links the new object to the constructor's prototype.
4. Returns the newly created object.

---

## Q8. What is Inheritance in OOP?

**Answer:**  
Inheritance in OOP is the ability of a **class to derive properties and characteristics from another class** while also having its own properties and behavior.

The class being inherited from is called the **parent/base class**, while the class inheriting from it is called the **child/derived class**.

---

## Q9. What is the `super` keyword in JavaScript?

**Answer:**  
The `super` keyword in JavaScript acts as a reference to the **parent class**.

It is mainly used when we want to access:

- A parent class's constructor
- A parent class's methods
- Other inherited functionality from the parent class

Example:

```js
class Square extends Box {
    constructor(side) {
        super(side);
    }
}
```

## Qs10. What will be the output for the following code :

```js

class Box {
    constructor(name, l, b){
        this.name = name;
        this.l = l;
        this.b = b;
    }
    area(){
        let area = this.l * this.b;
        console.log(`Box area is ${area}`);
    }
}

class Square extents Box {
    constructor(a) {
        super("square", a, a);
    }
    area(){
        let area = this.l * this.b;
        console.log(`Square area is ${area}`);
    }
}

let square1 = neq Square(4);

square1.area();

```



**Ans.** The output will be “Square area is 16” as the child class (Square) implementation of area() function will override parent class (Box) implementation of the function with the same name.
