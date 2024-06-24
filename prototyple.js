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
