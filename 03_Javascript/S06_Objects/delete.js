var user = {
  name: "arjun",
  gender: "male",
  city: "hyd",
  id: 101,
  state: "TS",
};

console.log(user);

delete user.city;
delete user["id"];
delete user["name"];

console.log(user);
