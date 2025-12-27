class LocalStorage {
  constructor() {
    this.store = {};
  }

  get length() {
    return Object.keys(this.store).length;
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }
}

module.exports = new LocalStorage();
