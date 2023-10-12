var lodash = require('lodash')
var calc = require('./libs/calc')
var products = require('./data/products.json')

var a, b, operation;
process.argv.forEach(function (item, index) {
  if (item === "-n1") {
    a = parseInt(process.argv[index + 1]);
  } else if (item === "-n2") {
    b = parseInt(process.argv[index + 1]);
  } else if (item === "-op") {
    operation = process.argv[index + 1];
  }
});

if (a === undefined || b === undefined) throw "missing n1 or n2";

switch (operation) {
  case "div":
    console.log(calc.div(a, b));
    break;
  case "sum":
  default:
    console.log(calc.sum(a, b));
    break;
}

console.log(lodash.shuffle(products.list))