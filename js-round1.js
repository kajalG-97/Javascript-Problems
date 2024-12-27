const arr = [2, 3, 4, 5];

// arr.map(e=>e*2);
// console.log(arr.map(e=>e*2))

Array.prototype.myMap = function (callback) {
    var array = [];

    for (var i = 0; i < this.length; i++) {
        array.push(callback(this[i]));
    }

    return array;
}

console.log(arr.myMap(e => e * 3))


function dummy() {
    var b = 10;
}
dummy();
console.log(b);
if (true) { var b = 10; } console.log(b)

if (true) {
    var b = 10;
}

console.log(b);
const c = { name: 'abc' }
const b = c;

const e = {
    name: 'abc'
}

const b = e;
e['name'] = 'xyz'
console.log(e['name']);

const a = {
    n: 'abc',
    getName: function () {
        return this.n;
    }
}

console.log(c.getName());
const getNameFunc = c.getName;
console.log(getNameFunc());

// Two sum problem(we discussed all the approaches to solve the question)
// Function chaining and its implementation

// Write a class which implements the below code

calc.add(10).substract(5).multiply(3).total

class Calculator {
    constructor() {
        this.value = 0; // Initialize total value to 0
    }

    add(num) {
        this.value += num; // Add the number to the total value
        return this; // Return the instance for chaining
    }

    subtract(num) {
        this.value -= num; // Subtract the number from the total value
        return this; // Return the instance for chaining
    }

    multiply(num) {
        this.value *= num; // Multiply the total value by the number
        return this; // Return the instance for chaining
    }

    divide(num) {
        if (num === 0) {
            throw new Error("Cannot divide by zero"); // Handle division by zero
        }
        this.value /= num; // Divide the total value by the number
        return this; // Return the instance for chaining
    }

    total() {
        return this.value; // Return the current total value
    }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(10).subtract(5).multiply(3).total()); // Output: 15
