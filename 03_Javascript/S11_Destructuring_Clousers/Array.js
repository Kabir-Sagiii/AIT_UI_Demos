var arr = [
  "raj",
  "rohan",
  "priya",
  "soni",
  "ramesh",
  function () {
    console.log("getUser is called");
  },
];

var [x, y, z, a, b, c] = arr;

function f1() {
  //soni
  //   var x = arr[3];
  //   console.log(x);

  console.log(a);
}

function f2() {
  //priya ramesh
  //   var x = arr[2];
  //   var y = arr[4];
  //   console.log(x, y);

  console.log(z, b);
}

function f3() {
  //   console.log(arr[3], arr[4]);
  //   arr[5]();

  console.log(a, b);
  c();
}

f1();
f2();
f3();
