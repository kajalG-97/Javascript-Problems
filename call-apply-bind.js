const testObject = {
  name: "Kajal",
  func: function (msg) {
    console.log(this, msg);
  },
};

const object = { name: "Kuldeep" };

testObject.func.call(object, "call example");

testObject.func.apply("object", ["apply result"]);

testObject.func.bind(object, "bind")();
