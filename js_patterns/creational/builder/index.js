var CustomerBuilder = require("./Customer");

// Employees
var bill = new CustomerBuilder()
  .setName("Bill")
  .setIsEmployee(true)
  .setIsManager(false)
  .setHours(30)
  .build();

var max = new CustomerBuilder()
  .setName("Max")
  .setIsEmployee(true)
  .setIsManager(false)
  .build();

// Customers
var frank = new CustomerBuilder()
  .setName("Frank")
  .setIsEmployee(false)
  .setIsManager(false)
  .setHours(0)
  .setMoney(600)
  .addToShoppingList("shorts")
  .addToShoppingList("shoes")
  .build();

var ali = new CustomerBuilder()
  .setName("Ali")
  .setIsEmployee(false)
  .setIsManager(false)
  .setHours(0)
  .setMoney(1100)
  .build();

console.log(bill.toString());
console.log(max.toString());
console.log(frank.toString());
console.log(ali.toString());
