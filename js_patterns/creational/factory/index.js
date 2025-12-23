var Customer = require("./Customer");
var Employee = require("./Employee");

var codelicks = new Customer("Codelicks", 500);
var john = new Employee("John", 900, "Something");

console.log(codelicks.toString());
console.log(john.toString());
