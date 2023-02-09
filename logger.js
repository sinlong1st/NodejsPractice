var url = "http://mylogger.io/log";

function log(mes) {
  // Send HTTP Request
  console.log(mes);
}

module.exports = log;

console.log(__filename);
console.log(__dirname);
