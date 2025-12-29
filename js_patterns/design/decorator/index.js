const Customer = require("./Customer");
const { Item, SilverItem, GoldenItem } = require("./Item");

const alice = new Customer("Alice", 2500);

const phonecase = new Item("Phone Laptop", 29.99);
const headphones = new Item("Bluetooth Headphones", 49.99);

const goldenHeadphones = new GoldenItem(headphones);

alice.buy(phonecase);
alice.buy(goldenHeadphones);

alice.displayStatus();
