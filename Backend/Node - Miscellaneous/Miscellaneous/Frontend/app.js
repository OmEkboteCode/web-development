// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// array1.sayHello = () => {  
//     console.log("Hello!, I am Array")
// }
// array2.sayHello = () => {  // New function created
//     console.log("Hello!, I am Array")
// }

// function personMaker(name, age){
//     const person = {
//         name: name, 
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }


// let p1 = personMaker("adam", 25);
// let p2 = personMaker("jenny", 25);



// // Constructors. 

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi my name is ${this.name}`)
// }

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//     console.log(`Hi, my name is ${this.name}`)
//     }

// }



// let p1 = new Person("Adam", 25);
// let p2 = new Person("Jenny", 25);

// class Person {
//     constructor(name, age){
//         console.log("Person class constructor");
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`)
//     }
// }


// class Student extends Person {
//     constructor(name, age, marks){
//         console.log("Student class constructor");
//         super(name, age)   // Here super means the parent class constractor. parent class constacotor is being called
//         this.marks = marks;
//     }
// }

// // let student1 = new Student("adam", 25, 90);

// class Teacher extends Person {
    
//     constructor(name, age, subject){
//         console.log("Teacher class constructor");
//         super(name, age)   // Here super means the parent class constractor. parent class constacotor is being called
//         this.subject = subject;
//     }
// }

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