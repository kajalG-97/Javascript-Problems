//? Promise.all()
//? Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

//? Promise.allSettled()
//? Fulfills when all promises settle.

//? Promise.any()
//? Fulfills when any of the promises fulfills; rejects when all of the promises reject.

//? Promise.race()
//? Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

// ? taking bunch of promises, gives results of all promises in array after all promises resolved
// ? if any one promise failed, instead of getting result for rest, it will get failed

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
    resolve("error");
  }, 300);
});

console.log(
  promise
    .then((res) => console.log("its then", res))
    .catch((err) => console.log("err", err))
);

// ** promise all
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

const promises = [p1, p2, p3];

// Promise.all(promises).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
// });

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result))
// );

// Promise.any(promises).then((value) => console.log(value));

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "fast promise");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// // Expected output: "two"

const promiseAll = (promises) => {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result.push(res);
          if (index === promises.length - 1) resolve(result);
        })
        .catch((error) => reject("promise got failed with", error));
    });
  });
};

promiseAll(promises).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});

function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    let completed = 0;

    // Iterate through each promise in the array
    for (const promise of promises) {
      // When any promise resolves, resolve the outer promise with its value
      promise
        .then((value) => {
          resolve(value);
        })
        // If a promise rejects, keep track of the number of rejections
        .catch((error) => {
          completed++;
          // If all promises are rejected, reject the outer promise
          if (completed === promises.length) {
            reject(new AggregateError("All promises were rejected"));
          }
        });
    }
  });
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Second"));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 1500, "Third")
);

promiseAny([promise1, promise2, promise3])
  .then((value) => {
    console.log("Resolved:", value); // Output: Resolved: Second
  })
  .catch((error) => {
    console.error("Error:", error); // This will not be executed in this example
  });

const promissAll = () => {
  return new Promise((res, re) => {});
};

//! sleep promise function

function sleep(timer) {
  return new Promise(function (resolve, reject) {
    if (timer && typeof timer === "number") {
      setTimeout(() => {
        resolve(`slept for ${timer} milli seconds`);
      }, timer);
    } else {
      reject(`Timer value is missing..`);
      // reject(new Error("Parameter must be a number"));
    }
  });
}

sleepFunction(23).then((res) => console.log(res));

sleepFunction("not a number")
  .then(() => {
    console.log("This will not be printed");
  })
  .catch((error) => {
    console.error(error); // Output: Parameter must be a number
  });
