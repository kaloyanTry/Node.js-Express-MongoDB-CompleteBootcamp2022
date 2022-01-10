// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports: test-module1.js
// const Calculator = require("./test-module1.js");
// const calc1 = new Calculator();
// console.log(calc1.add(2, 5));

// exports: test-module.js:
const calc2 = require("./test-module2.js");
// const { add, multiply } = require("./test-module2"); // distructuring
console.log(calc2.multiply(2, 5));
console.log(calc2.divide(5, 2).toFixed(2));
console.log(calc2.subtract(2, 5));
console.log(calc2.add(2, 5));

// caching: test-module3.js
require("./test-module3.js")(); //these 3 lines code come from cache
require("./test-module3.js")();
require("./test-module3.js")();
