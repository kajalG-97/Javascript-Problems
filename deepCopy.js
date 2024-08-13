// const a = {
//   en: "Bye",
//   de: "Tschüss",
// };

// ! using spread operator
// let b = { ...a };
// let c = a;
// c.en = "Hi";

// b.de = "Ciao";
// // console.log(b.de); // Ciao
// // console.log(a.de); // Tschüss
// ! using Object.assign()
// let assignObj = Object.assign({}, a);
// assignObj.de = "Ciao";
// console.log(assignObj.de); // Ciao
// console.log(a.de); // Tschüss

// ! nested deep copy
const a = {
  foods: {
    dinner: "Pasta",
  },
};
let b = { foods: { ...a.foods } };
b.foods.dinner = "Soup";
// console.log(b.foods); // Soup
// console.log(a.foods); // Pasta

// ! using stringify, if object is nested

let stringifyB = JSON.parse(JSON.stringify(a));
stringifyB.foods.dinner = "noodles";

console.log(stringifyB);
console.log(a);

// todo array

const array = [1, 2, 3];

// option 1
// let b = [...array];
// option 2
// let b = array.map((el) => el);
// // option 3
// let b = a.slice(0);

// // option 4
// let b = JSON.parse(JSON.stringify(someArray));

b[1] = 4;

//? with the help of class

class Counter {
  constructor() {
    this.count = 5;
  }
  copy() {
    const copy = new Counter();
    copy.count = this.count;
    return copy;
  }
}
const originalCounter = new Counter();
const copiedCounter = originalCounter.copy();
console.log(originalCounter.count); // 5
console.log(copiedCounter.count); // 5
copiedCounter.count = 7;
console.log(originalCounter.count); // 5
console.log(copiedCounter.count); // 7

const symbol = Symbol("testing");
console.log(symbol.description);

let num = "2";
console.log(num === Object(num), Object(num));

let obj1 = {
  name: "kuldeep",
  age: 22,
  metadata: {
    time: 44,
    place: "delhi",
  },
};
let obj2 = { ...obj1, metadata: { ...obj1.metadata, place: "etawah" } };

function shallowCheck(obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(shallowCheck(obj1, obj2));

function deepCheck(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 != "object" ||
    typeof obj2 != "object" ||
    obj1 == null ||
    obj2 == null
  )
    return false;

  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (let a of key1) {
    if (typeof obj1[a] == "object" && typeof obj2[a] == "object") {
      if (deepCheck(obj1[a], obj2[a])) {
        continue;
      } else {
        return false;
      }
    } else if (
      typeof obj1[a] !== "object" &&
      typeof obj2[a] !== "object" &&
      obj1[a] === obj2[a]
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(deepCheck(obj1, obj2));
