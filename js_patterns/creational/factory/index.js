var PersonFactory = require("./PersonFactory");

var codelicks = new PersonFactory("Codelicks", 500);
var john = new PersonFactory("John", 900, "Employee", "Something");

console.log(codelicks.toString());
console.log(john.toString());
