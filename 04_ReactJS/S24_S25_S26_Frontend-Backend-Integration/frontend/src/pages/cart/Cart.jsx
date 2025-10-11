import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { toast } from "react-toastify";
function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/cart/get-carts-data")
      .then((res) => {
        if (res.data.ok) {
          console.log(res.data);
          setCarts(res.data.result);
        } else {
          throw Error(res.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
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
          {carts.length > 0 ? (
            carts.map(function (cart) {
              return (
                <div className="cart-content-body-data">
                  <div>
                    <img src={cart.image} alt="" width={70} height={70} />
                  </div>
                  <div>
                    <h4>{cart.title}</h4>
                  </div>
                  <div>
                    <p style={{ color: "black" }}>${cart.price}</p>
                  </div>
                  <div>
                    <button>+</button>
                    {1}
                    <button>-</button>
                  </div>
                  <div>
                    <button>Remove</button>
                  </div>
                </div>
              );
            })
          ) : (
            <h3
              style={{
                color: "red",
                fontSize: "42px",
                textAlign: "center",
                marginTop: "150px",
              }}
            >
              No Data to Display
            </h3>
          )}
        </div>
      </div>

      <div className="cart-order-summary"></div>
    </div>
  );
}

export default Cart;
