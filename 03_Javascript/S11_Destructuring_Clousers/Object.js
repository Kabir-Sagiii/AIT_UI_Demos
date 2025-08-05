var user = {
  name: "Kabir",
  gender: "male",
  id: 101,
  city: "pune",
};

var { city, gender } = user;

function f1() {
  //   console.log(user.gender, user.city);
  console.log(city, gender);
}

function f2() {
  //   console.log(user.city);
  console.log(city);
}

f1();
f2();
