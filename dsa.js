

const input = ['hello world', 'hi there', 'world hello', 'morning good', 'good morning', 'world hello'];

function echo(arr) {
    const result = []; // hello world hi there world hello
    let lastSortedMsg = ""; // world hello

    for (var i = 0; i < arr.length; i++) { // 2
        const sortedMsg = arr[i].split(" ").sort().join(" "); // hello world

        if (sortedMsg !== lastSortedMsg) { // true
            result.push(arr[i]);
            lastSortedMsg = sortedMsg;
        }
    }
    return result;
}
console.log(echo(input));

// keep -1 on same index and sort the array
const arr = [-1, 49, 20, -1, -1, 30, 50, -1];

function sortArray(arr) {
    let temp = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            temp.push(arr[i])
        }
    }

    temp.sort((a, b) => a - b);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = temp.pop();
        }
    }
    return arr;
}


console.log(sortArray(arr));