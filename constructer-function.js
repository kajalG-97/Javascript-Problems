function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.getInfoFunc = function () {
  console.log(this.name, this.age);
};

var person1 = new Person("Vivek", 76, "male");

person1.getInfoFunc();

class PersonClass {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
  }

  getNameFuc() {
    console.log(this.name, this.age);
  }
}

var personClass = new PersonClass("Courtney", 34, "female");

personClass.getNameFuc();
