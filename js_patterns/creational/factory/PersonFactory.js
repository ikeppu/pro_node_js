var Customer = require("./Customer");
var Employee = require("./Employee");

class PersonFactory {
  constructor(name, funds = 0, type = "Customer", employer = "") {
    if (type === "Customer") {
      return new Customer(name, funds);
    } else if (type === "Employee") {
      return new Employee(name, funds, employer);
    } else {
      throw new Error("Invalid person type");
    }
  }
}

module.exports = PersonFactory;
