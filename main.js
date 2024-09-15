const fs = require("fs");

fs.readFile("flag.txt", "utf-8", (err, data) => {
    console.log(data);
  });