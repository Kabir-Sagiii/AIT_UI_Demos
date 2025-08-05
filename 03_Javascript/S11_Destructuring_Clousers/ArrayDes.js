function getUser() {
  var username = "Rohan Verma";

  function getUserId() {
    console.log("User id is", 101);
  }

  return [username, getUserId];
}

// var data = getUser();
// console.log(data);
// data[1]();

var [username, getUserId] = getUser();
getUserId();

// var [a, b] = getUser();
// console.log(a);
// b();
