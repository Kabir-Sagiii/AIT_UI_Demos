var arr = [
  { brand: "Apple", model: "Iphone 16", price: 80000 },
  { brand: "Samsung", model: "Glaxy ultra", price: 150000 },
  { brand: "Oneplus", model: "Oneplus9", price: 40000 },
  { brand: "Apple", model: "Iphone 16 Pro", price: 185000 },
];

for (var element of arr) {
  if (element.brand === "Apple") {
    console.log(element);
  }
}
