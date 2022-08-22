const os = require("os");
const { userName: user, sayHi } = require("./test");

const name = "Anton";

console.log(sayHi(user));
console.log(os.platform(), os.release());

module.exports = name;
