const sum = (arg) => {
  return arg[0] + arg[1];
};
const mul = (arg) => {
  return arg[0] * arg[1];
};
const div = (arg) => {
  return arg[0] / arg[1];
};

const compose = (...args) => {
  const cbs = args.reverse();

  return function (...arg) {
    let ans = arg.length > 0 ? arg[0] : undefined; // Use the first argument as the initial value if provided

    cbs.forEach((func) => {
      ans = func(
        ans !== undefined
          ? ans
          : arg.length > 0
          ? func.apply(null, arg)
          : undefined
      ); // Pass all arguments if ans is undefined, otherwise pass only ans
    });

    return ans;
  };
};

const correctComposeFuc = (...functions) => {
  return (args) => {
    functions.reduceRight((arg, fun) => fun(arg), args);
  };
};

const composeFun =
  (...functions) =>
  (...func) =>
    functions.reduceRight((arg, fun) => fun(arg), func);

const result = composeFun(sum, mul, div);
console.log(result(2, 3));

// compose func from right to left
// pipe left to right
