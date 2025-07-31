var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var newArray = [];

arr.forEach(function (element) {
  var newValue = element + 100;
  newArray.push(newValue);
});

console.log(newArray);
