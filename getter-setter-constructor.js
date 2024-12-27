class Person {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
}

let person = new Person("John Winchester");
let person2 = new Person("John Winchester");

console.log(person.name);

person.name = "Harry Potter";

console.log(person.name);
