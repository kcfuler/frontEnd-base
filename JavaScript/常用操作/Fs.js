const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "../常用操作"), (err, files) => {
  if (!err) {
    console.log(files);
  } else {
    console.log(err);
    Z;
  }
});
