class Product {
  constructor(productName, productPrice) {
    this.productName = productName;
    this.productPrice = productPrice;
  }

  get total() {
    return this.productPrice;
  }

  printDetails() {
    console.log(`${this.productName}: $${this.productPrice}`);
  }
}

module.exports = Product;
