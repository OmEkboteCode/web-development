Q4 • NPM Package 📦

Now let's leave your own modules and interact with someone else's code.

Create a fresh Node project:

npm init

Then install:

npm install figlet

Create app.js and use figlet to print:

GSoC

in ASCII art.

Requirements

Your code should:

Import figlet using CommonJS.
Call figlet().
Handle the err argument.
Print the generated ASCII text if successful.

After running it, check your project and identify what these three things are doing:

node_modules/
package.json
package-lock.json



Q5 • process.argv + external package

Let's make the next one slightly more realistic.

Build a tiny command-line program called greet.js.

When you run:

node greet.js Glacier

it should output an ASCII-art greeting containing the supplied name.

For example, conceptually:

Hello Glacier!

Use:

process.argv
figlet
a loop is not required
handle the figlet error like you just did

Then test it with two different names.