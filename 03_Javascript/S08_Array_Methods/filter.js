var arr = [1, 3, 6, 9, 8, 4, 22, 51];

var filteredArray = arr.filter(function (element, index) {
  //   var status = element > 30 && element < 80;
  var status = element % 2 === 0;
  return status;
});

console.log(filteredArray); //
