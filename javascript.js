var arr = [1, 2, 3, 4];

for (var i = 0; i < arr?.length; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
1 == "1"; // true
1 == [1]; // true
1 == true; // true
0 == ""; // true
0 == "0"; // true
0 == false; // true

console.log(1 == "1");
console.log(1 == [1]);
console.log(1 == true);
console.log(0 == "");
console.log(0 == "0");
console.log(0 == false);
