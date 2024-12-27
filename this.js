// const obj = {
//   name: "test",
//   fun: function () {
//     console.log("this", this, this.name);
//     this.abc();
//   },
//   abc: () => {
//     console.log("arrow this", this, this.name);
//   },
// };

// const check = obj.fun();
// obj.abc();
// console.log("check", obj.fun());

// function outerFunction() {
//   const outerThis = this;
//   console.log("Outer this:", outerThis); // Output: the global object (window in browsers)

//   function innerFunction() {
//     const innerThis = this;
//     console.log("Inner this:", innerThis); // Output: the global object (window in browsers)
//   }

//   const arrowInnerFunction = () => {
//     const arrowInnerThis = this;
//     console.log("Arrow inner this:", arrowInnerThis); // Output: the outerThis (lexical this from outerFunction)
//   };

//   innerFunction();
//   arrowInnerFunction();
// }

// outerFunction();

// let hero = {
//   powerLevel: 99,
//   getPower() {
//     return this.powerLevel;
//   }
// }

// let getPower = hero.getPower();
// console.log(getPower);


// let hero2 = { powerLevel: 42 };
// // console.log(getPower());
// console.log(getPower.apply(hero2));

// const b = {
//   name: "Vivek",
//   f: function () {
//     var self = this;
//     console.log(this.name);
//     (function () {
//       console.log(this.name);
//       console.log(self.name);
//     })();
//   }
// }
// b.f();

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 2000);
}