class Customer {
  constructor(
    name,
    isEmployee = false,
    isManager = false,
    hours = 40,
    money = 0,
    shoppingList = []
  ) {
    this.name = name;
    this.isEmployee = isEmployee;
    this.isManager = isManager;
    this.hours = hours;
    this.money = money;
    this.shoppingList = shoppingList;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class CustomerBuilder {
  constructor() {
    this.name = "";
    this.isEmployee = false;
    this.isManager = false;
    this.hours = 40;
    this.money = 0;
    this.shoppingList = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setIsEmployee(isEmployee) {
    this.isEmployee = isEmployee;
    return this;
  }

  setIsManager(isManager) {
    this.isManager = isManager;
    return this;
  }

  setHours(hours) {
    this.hours = hours;
    return this;
  }

  setMoney(money) {
    this.money = money;
    return this;
  }

  setShoppingList(shoppingList) {
    this.shoppingList = shoppingList;
    return this;
  }

  addToShoppingList(item) {
    this.shoppingList.push(item);
    return this;
  }

  build() {
    return new Customer(
      this.name,
      this.isEmployee,
      this.isManager,
      this.hours,
      this.money,
      this.shoppingList
    );
  }
}

module.exports = CustomerBuilder;
