var getPrice = (x, y) => {
  console.log("Arrow Function");
  return x + y;
};

function getProducts(getPrice) {
  console.log(getPrice);
}

getProducts(() => {
  console.log("Arrow Function as a Argument");
});

function f1() {
  return "hello i am named function";
}
var value1 = f1();
console.log(value1);

var f2 = () => "hello i am arrow function";
value2 = f2();
console.log(value2);
