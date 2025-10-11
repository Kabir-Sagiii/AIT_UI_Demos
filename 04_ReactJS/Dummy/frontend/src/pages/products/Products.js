import axios from "axios";
const url = "https://fakestoreapi.com/products";
export function getProducts(setProducts) {
  axios
    .get(url)
    .then(function (res) {
      setProducts(res.data);
    })
    .catch(function (error) {
      alert("Something went wrong to access Products");
      console.log(error);
    });
}

export function filterProducts(categoryName, setProducts) {
  if (categoryName) {
    axios
      .get(url)
      .then(function (res) {
        setProducts(
          res.data.filter(function (product) {
            //[{},{},{},{}]
            return product.category === categoryName;
          })
        );
      })
      .catch(function (error) {
        alert("Something went wrong to access Products");
        console.log(error);
      });
  } else {
    getProducts(setProducts);
  }
}

export function addToCart(product) {
  axios
    .post("http://localhost:5001/cart/add-to-cart", product)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}
