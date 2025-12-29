class Item {
  constructor(itemName, itemCost) {
    this.itemName = itemName;
    this.itemCost = itemCost;
  }

  showDetails() {
    console.log(`${this.itemName} is priced at $${this.itemCost}`);
  }
}

class SilverItem {
  constructor(baseItem) {
    this.itemName = `Silver ${baseItem.itemName}`;
    this.itemCost = baseItem.itemCost + 200;
  }
}

class GoldenItem {
  constructor(baseItem) {
    this.itemName = `Gold ${baseItem.itemName}`;
    this.itemCost = baseItem.itemCost + 500;
  }
}

module.exports = { Item, SilverItem, GoldenItem };
