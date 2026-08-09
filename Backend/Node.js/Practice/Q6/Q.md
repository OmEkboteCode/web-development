Q6 • Mini Repository Task 🧩

Now we're going to combine the pieces you've learned so far into something closer to how you'd encounter a small open-source repository.

Create:

student-tool/
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
│
└── utils/
    ├── student.js
    └── index.js
student.js

Create and export:

createStudent(name, age)

It should return an object:

{
    name: "Glacier",
    age: 19
}
index.js

Re-export createStudent so that app.js only needs:

const { createStudent } = require("./utils");
app.js

Read the student's name and age from command-line arguments:

node app.js Glacier 19

Then create the student and print the object.

Expected idea:

{ name: 'Glacier', age: '19' }

Notice that process.argv gives you strings, so don't worry about converting the age yet unless you want to.

.gitignore

Add:

node_modules/

Then run:

git status

and verify that node_modules isn't being shown as something Git wants to track.