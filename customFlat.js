// todo custom flat

const customFlatFunc = (arr, depth) => {
  let result = [];

  arr.forEach((ele) => {
    if (Array.isArray(ele) && depth > 0) {
      result.push(...customFlatFunc(ele, depth - 1));
    } else {
      result.push(ele);
    }
  });

  return result;
};

// console.log(customFlatFunc(ts, Infinity));
console.log(customFlatFunc(ts, 2));
// console.log(ts);

// composition pollyfill

let input = [1, [2, 3], [3], [[[5]], 6]];

const flatten = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    }
    return acc.concat(curr);
  }, []);
};

let output = input.reduce((acc, curr) => {
  return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
}, []);

console.log(output);

// or there is a new Array flat method that can be used to solve this.
// let output = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flat().flat(Infinity)

console.log(output); // [0,1,2,3,4,5]
