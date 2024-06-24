class LRU {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.cache = new Map();
  }

  setV(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.maxLength) {
      this.cache.delete(this.firstObjEle());
    }
    this.cache.set(key, value);
  }

  get(key) {
    const newItem = this.cache.get(key);
    if (newItem) {
      this.cache.delete(key);
      this.cache.set(key, newItem);
    }
  }
  firstObjEle() {
    return this.cache.keys().next().value;
  }
}

const obj = new LRU(2);
obj.setV("name", "kajal");
obj.setV("age", "23");
obj.setV("time", "100");
console.log(obj.cache);
