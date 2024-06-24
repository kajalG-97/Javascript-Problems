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
// // obj.abc();
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

var arr = [1, 3, 4];

// console.log(arr.map((e) => e * 2));

// Array.prototype.myMay = function (callback) {
//   let arr = [];

//   for (var i = 0; i < this.length; i++) {
//     arr.push(callback(this[i]));
//   }

//   return arr;
// };

// Array.prototype.mfilter = function(callback){
//   let ans = [];

//   for(var i = 0;i<this.length;i++){
//     if(callback(this[i]))
//     ans.push()
//   }
// }

const debounce = (cb, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => cb.apply(this, args), delay);
  };
};

const testFunc = debounce((a, b) => console.log(a * b), 1000);

testFunc(4, 3);

const throttle = (cb, delay) => {
  let lastCall = 0;
  return function (...arg) {
    const time = new Date().getTime();

    if (time - lastCall < delay) return;

    lastCall = time;
    cb(...arg);
  };
};

const th = throttle((a, b) => console.log(a, b), 1000);
th(2, 3);

Array.prototype.maymap = function (callback) {
  var arr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i]) arr.push(callback(this[i]));
  }
  return arr;
};

console.log([1, 2, 3]?.maymap((e) => e * 2));

const tt = (cb, delay) => {
  const lastCall = 0;
  return function (...arg) {
    const time = new Date().getTime();

    if (time - lastCall < delay) return;
    lastCall = time;
    cb(...arg);
  };
};
