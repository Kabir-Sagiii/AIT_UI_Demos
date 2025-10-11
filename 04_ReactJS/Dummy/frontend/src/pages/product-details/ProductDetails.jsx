import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [product, setProduct] = useState({
    id: 0,
    image: "",
    title: "",
    rating: {
      rate: 0,
      count: 0,
    },
    category: "",
    description: "",
    price: 0,
  });
  const { id } = useParams(); //obj = {id:9}

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        alert("error");
      });
  }, []);

  return (
    <div className="product-details">
      <div className="productDetailsImage">
        <img src={product.image} width={"100%"} height={470} alt="" />
      </div>
      <div className="productDetailsContent">
        <div className="contentRowColumn-2">
          <div style={{ position: "relative", left: "30px" }}>
            <dl>
              <dt>ID</dt>
              <dd>{product.id}</dd>
            </dl>
          </div>
          <div style={{ position: "relative", left: "30px" }}>
            <dl>
              <dt>Title</dt>
              <dd>{product.title}</dd>
            </dl>
          </div>
        </div>

        <div className="contentRowColumn-2">
          <div style={{ position: "relative", left: "30px" }}>
            <dl>
              <dt>Price</dt>
              <dd>$ {product.price}</dd>
            </dl>
          </div>
          <div style={{ position: "relative", left: "30px" }}>
            <dl>
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </dl>
          </div>
        </div>
        <div className="contentRowColumn-2">
          <div style={{ position: "relative", left: "30px" }}>
            <dl>
              <dt>Rating</dt>
              <dd>{product.rating.rate}</dd>
            </dl>
          </div>
          <div style={{ position: "relative", left: "30px" }}>
            <dl>
              <dt>Count</dt>
              <dd>{product.rating.count}</dd>
            </dl>
          </div>
        </div>
        <div className="contentRowColumn-1">
          <div style={{ position: "relative", left: "30px" }}>
            <dl>
              <dt>Description</dt>
              <dd>{product.description}</dd>
            </dl>
          </div>
        </div>
        <div className="contentRowButtonColumn-2">
          <div>
            <button>Back to Products</button>
            <button>Add-To-Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
