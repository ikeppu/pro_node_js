const Product = require("./product");

class ProductCategory {
  constructor(name, composites = []) {
    this.name = name;
    this.composites = composites;
  }

  get total() {
    return this.composites.reduce(
      (total, nextItem) => total + nextItem.total,
      0
    );
  }

  printDetails() {
    console.log(`Category: ${this.name}`);
    this.composites.forEach((item) => item.printDetails());
  }
}

module.exports = ProductCategory;
