const fs = require("fs");

//const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
// asynchronous
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    console.log("file contents read");
    console.log(text);
});

//console.log(text);