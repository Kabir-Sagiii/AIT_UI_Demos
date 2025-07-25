var obj = {
  productName: "Acer 510",
  price: 60000,
  qty: 3,
  totalAmount: function (x, y) {
    console.log("function as a value");
    return 60000 * 3;
  },
  display: (x, y) => {
    console.log(x, y);
  },
};

var value = obj.totalAmount();
obj.display(10, 20);

console.log(value);
