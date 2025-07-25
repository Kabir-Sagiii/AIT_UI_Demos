var getProduct = function () {
  console.log("Anonymous function");
};

// var a = function myfun() {
//   console.log("Named Function");
// }; Not Recommended

a();

function f1(x, y) {
  console.log(x, y);
  x();
}

f1(function () {
  console.log("Anonymous as a function argument");
}, 100);

getProduct();
