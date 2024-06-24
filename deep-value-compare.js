function deepEqual(value1, value2) {
  // If the types of value1 and value2 are different, they are not equal
  if (typeof value1 !== typeof value2) {
    return false;
  }

  // If value1 and value2 are primitive types or functions, compare them directly
  if (
    typeof value1 !== "object" ||
    value1 === null ||
    value2 === null ||
    value1 instanceof Function
  ) {
    return value1 === value2;
  }

  // If value1 and value2 are arrays, compare their lengths and elements recursively
  if (Array.isArray(value1)) {
    if (value1.length !== value2.length) {
      return false;
    }
    for (let i = 0; i < value1.length; i++) {
      if (!deepEqual(value1[i], value2[i])) {
        return false;
      }
    }
    return true;
  }

  // If value1 and value2 are objects, compare their keys and values recursively
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
      return false;
    }
  }
  return true;
}

// Example usage:
const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const obj2 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

console.log(deepEqual(obj1, obj2)); // Output: true
