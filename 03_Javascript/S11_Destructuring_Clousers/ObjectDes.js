function displayUser({ username, gender }) {
  console.log(username, gender);

  return {
    brandName: "Apple",
    price: 80000,
  };
}

var { brandName, price } = displayUser({ username: "sagar", gender: "male" });
console.log(price, brandName);
