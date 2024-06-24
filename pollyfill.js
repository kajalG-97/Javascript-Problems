var arr = [1, 2, 3, 4];
var num = 2;

Array.prototype.myFilter = function (callback) {
  var ans = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) ans.push(this[i]);
  }
  return ans;
};

var array = arr.myFilter((e) => e === num);
// console.log(array);

Array.prototype.myMap = function (callback) {
  var mapAns = [];
  for (var i = 0; i < this.length; i++) {
    mapAns.push(callback(this[i]));
  }
  return mapAns;
};
// console.log(arr.myMap((e) => e * 2));

// arr.forEach((e) => console.log(e * 4));

Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
// arr.myForEach((e) => console.log(e * 4));

var arrOfObj = [
  { id: 1, type: "first" },
  { id: 2, type: "sec" },
  { id: 3, type: "third" },
];

Array.prototype.findObj = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
};

// console.log(arrOfObj.findObj((e) => e.id === num));

const arrayy = [1, 2, 3, 4, 4];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

// arrayy.reduce(reducer);

const sum = arr.reduce((accumulator, currentValue, index) => {
  const returnValue = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returnValue}`
  );
  return returnValue;
}, 0);

if (!Array.prototype.reduce) {
  Array.prototype.myReduce = function (callback /*, initialValue*/) {
    if (this === null) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let accumulator = arguments.length > 1 ? arguments[1] : undefined;
    for (let i = 0; i < this.length; i++) {
      if (accumulator === undefined) {
        accumulator = this[i];
      } else {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      }
    }
    if (accumulator === undefined) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    return accumulator;
  };
}

// console.log(arr.map((e) => e + 1));
// console.log(arr.forEach((e) => e + 1));

const ts = [[1, 2], [4, 5, [3, 6, [8, 1], 4]], [9]];

// console.log([...new Set(ts.flat().flat().sort())]);
// console.log([...new Set(ts.flat(Infinity).sort())]);

Array.prototype.mmm = function (callback) {
  var arr = [];

  for (var i = 0; i < this.length; i++) {
    arr[i] = this[i];


    if (callback(this[i])) ans.push(this[i]);
  }
  return arr;
};
