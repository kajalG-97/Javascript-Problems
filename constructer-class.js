class ES6Person {
  constructor(pName) {
    var name = pName;

    this.getName = function () {
      return name;
    };
  }
}

var Person = function (pName) {
  var name = pName;

  this.getName = function () {
    return name;
  };
};

var person = new ES6Person("Neelesh ES6Person");
console.log(person.getName());

var person = new Person("Neelesh");
console.log(person.getName());
