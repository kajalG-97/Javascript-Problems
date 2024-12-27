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

console.log(customFlatFunc([[[[[0]], { [1]: 8 }], [[[2], [3]]], [[4], [5]]]], Infinity));
console.log(customFlatFunc([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]], 2));

let input = [1, [[[[[[2, 3]]]]]], [3], [[[5]], 6]];

const flatten = (arr) => {
  return arr.reduce(
    (acc, curr) => {
      console.log('acc', acc.concat(curr));

      if (Array.isArray(curr)) {
        return acc.concat(flatten(curr));
      }
      return acc.concat(curr);
    }, []);
};

console.log('flatten', flatten(input));


function flattenArray(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

// // or there is a new Array flat method that can be used to solve this.
// output = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flat(Infinity)

// console.log(output); // [0,1,2,3,4,5]
