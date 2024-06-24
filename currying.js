// // actual approach
// const curryingSum = (a) => {
//   return function (b) {
//     if (b) return curryingSum(a + b);
//     return a;
//   };
// };

// console.log("currying", curryingSum(2)(3)(10)());

// // ** 1st option
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log("add(3)(4)", add(3)(4));

// // ** 2nd option

// function multiply(a, b) {
//   return a * b;
// }

// function currying(fn) {
//   return function (a) {
//     return function (b) {
//       return fn(a, b);
//     };
//   };
// }

// var curriedMultiply = currying(multiply);

// curriedMultiply(4)(3);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(1)(2)(3)());

// function sum(a) {
//   return function (b) {
//     if (!b) {
//       return a;
//     }
//     return sum(a + b);
//   };
// }
// console.log(sum(1)(2)(3)(4)(5)(6)()); //21

function multiply(a, b, c) {
  return a * b - c;
}

function multiplyUsingCurring(a) {
  return function (b) {
    return function (c) {
      return a * b - c;
    };
  };
}
// console.log("multiply", multiply(2, 3, 1));
// console.log("multiplyUsingCurring", multiplyUsingCurring(2)(3)(1));

const func = (a) => {
  return function (b) {
    if (b) return func(a + b);
    return a;
  };
};
console.log("func", func(2)(3)(1)());
