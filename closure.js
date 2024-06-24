var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length - 1; i++) {
  // Using an IIFE with an argument to create a closure
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i); // Passing 'index' as an argument to the setTimeout callback
}

const obj = {
  name: "kajal",
  getName: function () {
    console.log(this.name);
    return () => console.log("hey u ");
  },
};

var obj1 = { name: "baby" };

// obj.getName.call(obj1);

// const a = 
obj.getName.bind(obj1)();
// console.log(a, a());


