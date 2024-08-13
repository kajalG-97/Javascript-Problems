let a = 5;

if (true) {
  console.log(a); // 5

  a = 10;

  console.log(a); // 10
}

var b = 15;

if (true) {
  console.log(b); // will give reference error

  let b = 110; // using same variable name will work for var to let but not to let to var

  console.log(b);
}

let c = 55;
if (true) {
  console.log(c); // here also reference error, as
  //    its taking reference for C which is present in block

  let c = 105;

  console.log(c);
}
