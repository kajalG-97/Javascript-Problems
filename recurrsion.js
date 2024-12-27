// Write a recursive function repeat(3, 5) wihich will 
// return [5,5,5]. Don’t use global variable.

function repeat(number, value) {
    var arr = [];
    if (number === 0) {
        return arr;

    } else {
        return [value].concat(repeat(number - 1, value));
    }
}

function repeat(number, value) {

    if (number === 0) {
        return [];

    } else {
        return [value, ...repeat(number - 1, value)];
    }
}

function repeat(number, value) {

    if (number === 0) {
        return [];

    } else {
        let arr = repeat(number - 1, value);
        arr.push(value);
        return arr;
    }
}

function repeat(number, value) {
    let arr = [];

    function helper(num) {
        if (num === 0) return [];
        else {
            arr.push(value);
            return helper(num - 1)
        }
    }
    return helper(number);
}
