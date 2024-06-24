const debounce = (callback, delay = "2000") => {
  let handleBounce;

  return function (...args) {
    // arg which we passed to debounceFun

    const context = this;

    clearTimeout(handleBounce);

    // we used this and apply so the argument come as same as we passed, instead of this we can pass null or empty object also.

    handleBounce = setTimeout(() => callback.apply(context, args), delay); // setTimeout also take callback function, so need to call it here
  };
};

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

// var objDebounce = {
//   name: "Kajal",
//   getObjFun: debounce(function (a, b, c) {
//     console.log("debounce", a, b, c, this.name);
//   }),
// };
// objDebounce.getObjFun("h", "a", "3");

const bounce = (callback, delay) => {
  let timer;

  return function (...arg) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => callback.apply(this, arg), delay);
  };
};

const bounceTest = bounce(
  (a, b) => console.log("im debounce return func", a, b),
  2000
);

console.log("bounceTest", bounceTest(3, 5));

const throttleFuncs = (callback, delay) => {
  let lastCall = 0;

  return function (...args) {
    const currTime = new Date().getTime();
    if (currTime - lastCall < delay) {
      return;
    }
    lastCall = currTime;
    callback(...args);
  };
};
