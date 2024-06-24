// Example of Prototypal Inheritance​
function Parent() {
  this.name = "Parent";
}

Parent.prototype.greet = function () {
  console.log("Hello from " + this.name);
};

const child = Object.create(Parent.prototype);

child.cry = function () {
  console.log("waaaaaahhhh!");
};

child.cry();
// waaaaaahhhh!

child.greet();
// hello from Parent

child.constructor;
// ƒ Parent() {
//   this.name = 'Parent';
// }

child.constructor.name;
// 'Parent'
// Things to note are:
// .greet is not defined on the child, so the engine goes up the prototype chain and finds .greet off the inherited from Parent.
// We need to call Object.create in one of following ways for the prototype methods to be inherited:
Object.create(Parent.prototype);
Object.create(new Parent(null));
Object.create(objLiteral);
// Currently, child.constructor is pointing to the Parent:
// If we'd like to correct this, one option would be to do:
function Parent() {
  this.name = "Parent";
}

Parent.prototype.greet = function () {
  console.log("Hello from " + this.name);
};

function Child() {
  Parent.call(this);
  this.name = "Child";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child();

child.greet();
// hello from Child

child.constructor.name;
// 'Child'
// References​
// http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
// https://www.quora.com/What-is-prototypal-inheritance/answer/Kyle-Simpson
// https://davidwalsh.name/javascript-objects
// https://crockford.com/javascript/prototypal.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
