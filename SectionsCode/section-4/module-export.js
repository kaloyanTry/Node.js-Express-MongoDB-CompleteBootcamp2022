// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     return a / b;
//   }
// }

// module.exports = Calculator; // creating class and exports it

// or using properties directly with exports:
exports.add = (a, b) => a + b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
