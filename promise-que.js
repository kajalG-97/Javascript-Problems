

function sayHello() {
    console.log('Hello, World');
}

// _.times(5, sayHello);


// aabc -> baac -> ba ac -> ab ac

// Debit Card -> Bad Credit

const compare = (str1, str2) => {

    var string1 = str1.toLowerCase().split("").sort().join("").replaceAll(" ", "");
    var string2 = str2.toLowerCase().split("").sort().join("").replaceAll(" ", "");

    return string1 === string2;
}

console.log(compare("Tom Marvolo Riddle", "I am Lord Voldemort"));

let arr = [90, 2465, 29, 76, 450, 1000, 65]
console.log(arr.sort((a, b) => a - b));

// Create a function called multiply that takes an integer n as input and returns a Promise with the output as n*2 after waiting for n seconds

const multiply = (n) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(n * 2);
        }, n * 1000)
    })
}

multiply(3).then((val) => console.log('val', val)).catch((e) => e);
// console.log(res);

Promise.resolve(1)
    .then((r) => {
        console.log(r);
        return r * 10;
    })
    .then((r) => {
        console.log(r);
        return r * 10;
    })
    .then((r) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log(r)
                res(r * 10)
            }, 1000)
        })

    })
    .then((r) => {
        console.log(r);
        return r * 10;
    })
    .catch((err) => {
        console.log(err);
    });

// Implement the following delay function that takes in 2 arguments, the first argument is a function called fn and the second argument t is time in milliseconds. The delay function should execute the function fn AFTER t time has elapsed. After the fn function has completed its execution, the result from the fn function should be logged in the thennable block. The function fn CAN be an async function as well

function fn() {
    return 'hello World'
}

function delay(fn, t) {
    return new Promise((res, rej) => {
        setTimeout(() => res(fn()), t * 1000);
    })
}


delay(fn, 4).then((res) => console.log(res));



const promise1 = 3;
const promise2 = setTimeout(() => {
    resolve(promise1);
}, 2000);
const getPromiseAll = (arr = [promise1, promise2]) => {
    const result = []
    return new Promise((res, rej) => {
        arr.forEach((promise) => {
            promise.then((val) => {
                result.push(val);
                if (result.length === arr.length) {
                    res(result);
                }
            })
        })
    })
}


