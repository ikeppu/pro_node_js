class Customer {
  constructor(name = "no name") {
    this._name = name;
    this._cartItems = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get cartItems() {
    return this._cartItems.join(", ");
  }

  addItemToList(item) {
    this._cartItems.push(item);
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const clone = Object.create(proto);
    clone._name = this._name;
    clone._cartItems = [...this._cartItems];
    return clone;
  }

  toJson() {
    return JSON.stringify(this);
  }
}

module.exports = Customer;
