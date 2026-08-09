const figlet = require("figlet");

const name = process.argv[2];

figlet(name, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


