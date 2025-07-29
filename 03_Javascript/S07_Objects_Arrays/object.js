var user = {
  id: 101,
  name: {
    firstName: "Rohan",
    lastName: "Patil",
  },
  address: {
    office: {
      pincode: 500018,
    },
    home: {
      pincode: 600019,
    },
  },
};

//access
console.log(user.name.lastName);
console.log(user.address.office.pincode);

//update
user.name.lastName = "Patel";
console.log(user.name.lastName);
