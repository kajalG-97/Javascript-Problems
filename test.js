// Write a JavaScript program to count the number of vowels in a given string.

var name = "kajal";
var count = 0;
var vowels = ["a", "e", "i", "o", "u"];

for (var i = 0; i < name?.length; i++) {
  if (vowels.includes(name[i])) count++;
}

console.log(count);

// Write a JavaScript program to find the kth greatest element in a given array of integers.

var arr = [92, 45, 98, 8];

var max = -1;
var smax = -1;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    smax = max; // -1 2 3 6
    max = arr[i]; // 2 3  6 8
  }
}

console.log(smax, max);
