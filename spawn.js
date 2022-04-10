const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Vegas \n");
questionApp.stdin.write("Yo \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});
questionApp.on("close", () => {
    console.log(`questionApp process exited`)
});