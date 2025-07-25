function getUsers(p1) {
  console.log("got users data");
  p1();
  return 999999;
}

var x = getUsers(function myfun() {
  console.log("Named function passing as a callback");
});
console.log(x);

getUsers(function () {
  console.log("Anonymous function passing as a callback");
});

getUsers(() => {
  console.log("Arrow function passing as a callback");
});
