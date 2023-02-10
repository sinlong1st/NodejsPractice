// function sayHello() {
//   console.log("Hello");
// }

// // Create and load a module
// const logger = require("./logger");
// console.log(logger);

// //logger.logTest("Tai Nguyen");
// logger("Dang");

// // Path Module
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// // OS module
// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log("Total memory: " + totalMemory);
// console.log(`Free memory : ${freeMemory}`); //Template string

// // File system Module
// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);
// // Refer  the async one
// fs.readdir("./", (err, data) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Result(files):", data);
//   }
// });

// Events module
const EventEmitter = require("events");
// const emitter = new EventEmitter();
// Simple Explanation Steps:
// Sign up for an event and then call it and it will do "something"
// Something here is a function that you define to do whatever you want
// The function should be define and assign to the 2nd parameter of the method to sign up for an event
// Let's do an example...

const Logger = require("./logger");
const logger = new Logger();
// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called!!!", arg);
});
logger.log("message");
// Raise an event, you can also add para for the function
// emitter.emit("messageLogged", { id: 1, url: "/" }); // Call it and it will do the function you defined
// Raise: logging (data: message)
