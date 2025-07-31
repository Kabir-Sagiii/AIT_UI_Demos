var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var newarr = arr.map(function (element) {
  var newValue = element + 100;
  return newValue;
});

console.log(newarr);
