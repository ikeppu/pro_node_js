const Product = require("./product");
const ProductCategory = require("./ProductCategory");

const someBook = new Product("Some book", 29.99);
const anotherBook = new Product("Another book", 39.99);

const runningShoes = new Product("Nike Running Shoes", 79.99);

const books = new ProductCategory("Books", [someBook, anotherBook]);

books.printDetails();
console.log(`Total for books: $${books.total.toFixed(2)}`);
