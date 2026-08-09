# Node.js

- JavaScript Runtime Environment
- It is used for server side programming.

<b> Node.js is not a language, library or framework, it is a runtime environment, it allows js to run outside the browser</b>

## Node REPL(Read Evaluate Print Loop)
.help gives us commands

```js
> node
Welcome to Node.js v24.19.0.
Type ".help" for more information.
> ls
Uncaught ReferenceError: ls is not defined
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
```

## Node Files

node fileName.js

## Process

- process: This object provides information about , and control over, the current Node.js process. 

- process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.

```js
[
    "Where node is installed",
    "Where your script is located"
]


const arguments = process.argv;

for (let i = 2; i < arguments.length; i++) {
  console.log("Hello & Welcome to ", arguments[i]);
}

$ node script.js Alice Om Builder System Researcher
Hello & Welcome to  Alice
Hello & Welcome to  Om
Hello & Welcome to  Builder
Hello & Welcome to  System
Hello & Welcome to  Researcher

```

## module.exports (files)
requiring files

<i> Must exist in same folder or have to write the correct directory</i>

- require() a built-in function to include external modules that exist in separate files.

- module.exports OR exports.(Shorthand) In Node.js, module.exports is the special object used to expose functions, variables, or objects from a file so they can be consumed by other files via the require() function. It is the foundation of the CommonJS module system native to Node.js

```js
module.exports = "hello";

const someValue = require("./math");

console.log(someValue)

const sumation = (a, b) => a+b;
const subtraction = (a, b) => a-b;
const multiplication = (a, b) => a*b;
const g = 9.8;
const PI = 3.14;

let object = {
    sumation: sumation,
    subtraction: subtraction,
    multiplication: multiplication,
    g: g,
    PI: PI,
}

module.exports = object;


const math = require("./math");

const math = require("./math");

console.log(math.PI)
console.log(math.subtraction(4, 2))

OR

module.exports.sumation = (a, b) => a+b;
module.exports.subtraction = (a, b) => a-b;
module.exports.multiplication = (a, b) => a*b;
exports.g = 9.8;
exports.PI = 3.14;

exports = 5; // This doesn't work and will be treated variable


OR  if type = "module"

export const createStudent = (name, age) => {
    return `name: ${name}
    age: ${age}`
}
```

## module.exports (directory)
requiring directory

- To export an entire directory as a module in Node.js, create an <i>index.js</i> file at the root of that directory to collect and export its contents. When another file requires the directory path, Node.js automatically looks for and resolves this index.js file.

- index.js is entry point

```js
const apple = require("./apple");
const mango = require("./mango");
const banana = require("./banana");

let fruits = [apple, banana, mango];

module.exports = fruits;


const information = require("./Fruits");

console.log(information);
console.log(information[0].name);

```

## NPM (Node Package Manager) IMP
Standard package manager for Node.js.

- npm (Node Package Manager) is the default package manager for Node.js that automates the installation, configuration, and management of open-source JavaScript libraries and dependencies. 
- Imagine it as library of packages
(Package is code written by someone else which we can use. Example: express.js, react.js)
- command line tool

## Installing Packages

npm install <package name>

- node_modules: The node_modules folder is a directory in JavaScript and Node.js projects that stores all third-party libraries, packages, and their dependencies downloaded by package managers like npm or Yarn. It acts as a local repository that your code needs in order to run.

- package-lock.json: it records the exact version of every installed dependency, including its sub-dependencies and their versions


<i>Create a index.js in that directory of package installed to export it in others files</i>

```js
const figlet = require("figlet");


figlet("Stanford!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
```

- If node_modules is deleted and you have package.json then you just need to run <b>npm install</b>


- package.json: It is a file containing descriptive and functional <i>metadata</i> about a project, such as a name, version, license and dependencies.

- To create package.json <b>npm init</b>
- Can also add new packages to this project using npm install <package name>

```js
$ npm init    // OR npm init -y
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (myproject)
version: (1.0.0)
description: Experimenting node packages
entry point: (index.js)
test command:
git repository:
keywords:
author: OmEkboteCode
license: (ISC)
type: (commonjs)
About to write to D:\Programming\Web Development\Backend\Node.js\MyProject\package.json:

{
  "name": "myproject",
  "version": "1.0.0",
  "description": "Experimenting node packages",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "OmEkboteCode",
  "license": "ISC",
  "type": "commonjs"
}


Is this OK? (yes)
```

## Local v/s Global

- Local istallation is the best practice

npm install -g <package name>
npm link <package name>


## require v/s import

- First: Export. Second: Import. Third: node init and type: "module"

import { sum } from "./math.js" (Here use full file name including .js)

- We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.

Loading is synchronous for 'require' but can be asynchronous for 'import'.

<i>In a project we only use one of the two require or import for the whole project and not both</i>

```js
export const sumation = (a, b) => a+b;
export const subtraction = (a, b) => a-b;
export const multiplication = (a, b) => a*b;
export const g = 9.8;
export const PI = 3.14;

node init // Create a package.json file

{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "OmEkboteCode",
  "type": "module", //Change it to module Always
  "main": "math.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}

import { sumation, PI } from "./math.js";

console.log(sumation(10, 15));

node script.js
```
| `package.json`       | You use                        |
| -------------------- | ------------------------------ |
| `"type": "commonjs"` | `require()` + `module.exports` |
| `"type": "module"`   | `import` + `export`            |


## Changes handling

- run echo node_modules/ >> .gitignore    (ignore everything inside node_modulus)

- then run <b>git rm -r --cached node_modulus</b> (Remove node_modulus from git's tracking, but do NOT delete it from my computer)
- then git status

OR

Your Git repository appears to be:

`D:\Programming\Web Development`

So open the VS Code terminal and make sure you're at that location.

Run:

```bash
cd "D:\Programming\Web Development"
```

Then check:

```bash
pwd
```

You should see something like:

```text
Path
----
D:\Programming\Web Development
```

Now create/open the root `.gitignore`:

```bash
notepad .gitignore
```

If Windows asks whether to create it, say **Yes**.

Put this inside:

```gitignore
node_modules/
```

Save it.

### Why does one line ignore all 3?

This:

```gitignore
node_modules/
```

means:

> **"Git, ignore directories named `node_modules` wherever they appear inside this repository."**


## Examples

```js
export const createStudent = (name, age) => {



return name: ${name}
age: ${age}



}export { createStudent } from "./student.js";

import { createStudent } from "./utils/index.js";



const argumentName = process.argv[2];

const argumentAge = process.argv[3];



console.log(createStudent(argumentName, argumentAge));
```