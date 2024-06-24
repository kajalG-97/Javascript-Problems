// How do you declare private and static variables in classes
class Person {
  #name;
  constructor(name) {
    this.#name = "masai";
  }
  #privateMethod() {
    return "Hello";
  }
  getPrivateMessage() {
    return this.#name;
  }
}

const person = new Person("Barry Allen");

console.log(person.property); //undefined

console.log(person.privateMethod); // undefined

console.log(person.getPrivateMessage());

// Static variables in classes. Take a look at below example.

class Example {
  static staticVariable = "Some Static Variable";

  //static variable defined
  static staticMethod() {
    return "static method has been called.";
  }
}
// static variable called
console.log(Example.staticVariable);
// static method called
console.log(Example.staticMethod());
