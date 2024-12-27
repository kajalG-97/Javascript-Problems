function getMysticNumber() {
    var numbers = [];
    for (var i = 1; i <= 10; i++) {
        numbers[i] = function () {
            return i * 2;
        }
    }
    return numbers;
}

var mysticNumbers = getMysticNumber();
console.log(mysticNumbers[3]());

var truthyStr = "true";
var truthyNum = 1;

var strObj = new String(truthyStr);
var numObj = new Number(truthyNum);
console.log(strObj, numObj);


console.log(strObj === truthyStr);
console.log(numObj === truthyNum);