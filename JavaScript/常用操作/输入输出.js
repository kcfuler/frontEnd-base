const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function getinput(data) {
  if (typeof data == "string") {
    if (data == "close") {
      rl.close();
    }
  }

  console.log(data);
});
