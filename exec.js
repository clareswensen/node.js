const cp = require("child_process");

//cp.exec("open http://www.linkedin.com/learning");


//opens new instance of terminal
//cp.exec("open -a Terminal .");

cp.exec("ls", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});