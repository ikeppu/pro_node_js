var Customer = require("./Customer");
var base_prototype = require("./base.prototype");

var codelicks = base_prototype.clone();
codelicks.name = "Codelicks";
codelicks.addItemToList("product 1");
codelicks.addItemToList("product 2");
codelicks.addItemToList("product 3");
codelicks.addItemToList("product 4");
codelicks.addItemToList("product 5");

var john = base_prototype.clone();
john.name = "John Something";
john.addItemToList("product 1");
john.addItemToList("product 2");
john.addItemToList("product 3");
john.addItemToList("product 4");
john.addItemToList("product 6");

console.log(`${codelicks.name}: ${codelicks.cartItems}`);
console.log(`${john.name}: ${john.cartItems}`);

// console.log(john.toJson());
