var obj1 = {
  name: "John",
  age: 30,
};

var obj2 = {
  ...obj1,
  city: "New York",
  name: "Yash",
};

var arr1 = [1, 2, 3];
var arr2 = ["ait", ...arr1, true, false];

console.log(arr1);
console.log(arr2);
