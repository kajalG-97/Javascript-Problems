let obj = {
  name: "kajal",
  age: "12",
  gender: "female",
};

console.log("obj", obj.__proto__); // the value will be Object.prototype
// by default javascript engine adding __proto__ to the every object, func, arrays

let object2 = {
  name: "Aisha",
  role: "software eng",
};

// manually also we can add object2 prototype to obj

object2.__proto__ = obj;

console.log(object2.__proto__.age); // can inherit properties from age

function Person() {
  console.log("Creating a new person...");
  return "hello";
}

var person = Person(); // Logs "Creating a new person..."
console.log(person);
