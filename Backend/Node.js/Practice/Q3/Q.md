Q3 • Directory Module 🔧

Now we're moving from multiple files to a small module structure.

Create:

project/
│
├── app.js
│
└── tools/
    ├── formatter.js
    ├── calculator.js
    └── index.js
formatter.js

Export:

formatName(name)

It should return:

Student: Glacier
calculator.js

Export:

double(number)

It should return twice the number.

index.js

This is the important part.

Import both modules and export them together as one object.

So app.js should be able to do:

const tools = require("./tools");

and then:

tools.formatName("Glacier");
tools.double(21);

Expected:

Student: Glacier
42
Constraint 🎯

app.js must not directly require:

formatter.js
calculator.js

It should only require:

./tools