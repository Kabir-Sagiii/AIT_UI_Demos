import { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/cart/get-carts-data")
      .then((res) => {
        console.log(res.data);
        setCart(res.data.result);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  }, []);
  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-content-header">
          <h4>IMAGE</h4>
          <h4>PRODUCT NAME</h4>
          <h4>PRICE</h4>
          <h4>QUANTITY</h4>
          <h4>ACTION</h4>
        </div>
        <div className="cart-content-body">
          {cart.length > 0 ? (
            cart.map(function (p) {
              return (
                <div className="cart-product">
                  <div>
                    <img src={p.image} width={50} height={50} />
                  </div>
                  <div>
                    <p style={{ color: "black" }}>{p.title}</p>
                  </div>
                  <div>
                    {" "}
                    <p style={{ color: "black" }}>${p.price}</p>
                  </div>
                  <div>
                    <button>+</button>1<button>-</button>
                  </div>
                  <button>Remove</button>
                </div>
              );
            })
          ) : (
            <h2>No Products to Display</h2>
          )}
        </div>
      </div>
      <div className="cart-price"></div>
    </div>
  );
}

export default Cart;
