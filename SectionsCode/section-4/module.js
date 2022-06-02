// const Calc = require("./module-export"); // require module: class Calculator
//
// const currCalc = new Calc(); // create new instance of the class
// const addCalc = currCalc.add(2, 5); // using class properties
// console.log(addCalc);

// using properties directly with exports:
// const calc = require("./module-export");
// console.log(calc.add(2, 5));
// or deconstruction variables:
const { add, multiply } = require("./module-export");
console.log(add(3, 7));
console.log(multiply(3, 7));
