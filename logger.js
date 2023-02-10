var url = "http://mylogger.io/log";
const EventEmitter = require("events");
class Logger extends EventEmitter {
  log(mes) {
    // Send HTTP Request
    console.log(mes);
    this.emit("messageLogged", { id: 1, url: "/" });
  }
}

module.exports = Logger;

// console.log(__filename);
// console.log(__dirname);
