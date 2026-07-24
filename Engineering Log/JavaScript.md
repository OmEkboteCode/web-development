# JavaScript Engineering Log

### JS Lecture 2 (Conditions)

#### EL
...

---

### JS Lecture 3 (Arrays)

#### EL
...

---

### JS Lecture 4 (Loops)

#### EL 1
<i>Accumulation variables</i> are created before the loop/conditions, updated inside them, and used after the loop. This pattern is the same in Python and JavaScript.

---
#### EL 2

Experiment before assuming. I discovered that parseInt() ignores leading and trailing spaces, so trim() isn't necessary for this particular input.

---


### JS Lecture 6 (Fuctions)

#### EL 1
<i>Whenever you're doing a running total, maximum, minimum, or counts:</i>

- Create the variable before the loop.
- Update it inside the loop.
- Return or print it after the loop.

#### EL 2

<i>A function is a reusable, named task that can receive inputs, perform work, and optionally return a result.</i>

#### EL 4

<i>A parameter is not a variable from your program. It is a temporary name that the function uses for whatever value you pass into it.</i>

#### EL 5

<i>When JavaScript sees a variable, it starts searching in the current scope. If it doesn't find it, it moves outward, one scope at a time, until it either finds the variable or reaches the global scope. If it still doesn't find it, you get a ReferenceError.</i>

#### EL 6

<i>Inside an object's method <u>this</u> refers to the object that called the method.</i>