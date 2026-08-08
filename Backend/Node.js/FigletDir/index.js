const figlet = require("figlet");


figlet("Stanford!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Hello World!!");
//   console.log(text);
// }

// doStuff();