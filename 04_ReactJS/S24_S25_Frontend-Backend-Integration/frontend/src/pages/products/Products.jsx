import { useEffect, useState, useRef } from "react";
import "./Products.css";
import { getProducts, filterProducts } from "./Products.js";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const id = useRef();
  const [bgImage, setBgImage] = useState({
    image: "bgImage-1",
    title: "Electronic",
  });
  useEffect(() => {
    id.current = setInterval(() => {
      if (bgImage.image === "bgImage-1") {
        setBgImage({
          image: "bgImage-2",
          title: "Jewelery",
        });
      } else if (bgImage.image === "bgImage-2") {
        setBgImage({
          image: "bgImage-3",
          title: "Men's",
        });
      } else if (bgImage.image === "bgImage-3") {
        setBgImage({
          image: "bgImage-4",
          title: "Women's",
        });
      } else {
        setBgImage({
          image: "bgImage-1",
          title: "Electronic",
        });
      }
    }, 2000);
    return () => {
      clearInterval(id.current);
    };
  }, [bgImage]);

  return (
    <div>
      <section className={`product-banner ${bgImage.image}`}>
        <h1>{bgImage.title} Products Information</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          similique ut omnis accusantium odit voluptas labore consequatur, amet
          laudantium pariatur! Dolore blanditiis molestiae, totam, sit fuga
          sapiente suscipit nesciunt fugit libero ducimus doloribus.
          Voluptatibus reiciendis saepe tenetur impedit vitae. Iste praesentium
          vero ut molestiae perferendis magnam adipisci, provident recusandae
          minus.
        </p>
      </section>

      <section className="product-categories">
        <div
          onClick={() => {
            setActiveCategory("all");
            filterProducts(null, setProducts);
          }}
        >
          <img
            className={activeCategory === "all" ? "active" : "inactive"}
            src="https://tse3.mm.bing.net/th/id/OIP.j9HypQr5EAEYMLgxv4GnNgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            width={80}
            height={80}
          />
          <h3 className={activeCategory === "all" ? "green" : "black"}>All</h3>
        </div>

        <div
          onClick={() => {
            filterProducts("electronics", setProducts);
            setActiveCategory("electronics");
          }}
        >
          <img
            className={activeCategory === "electronics" ? "active" : "inactive"}
            src="https://c8.alamy.com/comp/2KP7X29/group-of-home-appliances-and-consumer-electronics-isolated-on-white-background-3d-illustration-2KP7X29.jpg"
            alt=""
            width={80}
            height={80}
          />
          <h3 className={activeCategory === "electronics" ? "green" : "black"}>
            Electronics
          </h3>
        </div>

        <div
          onClick={() => {
            filterProducts("jewelery", setProducts);
            setActiveCategory("jewelery");
          }}
        >
          <img
            className={activeCategory === "jewelery" ? "active" : "inactive"}
            src="https://content3.jdmagicbox.com/comp/warangal/s2/9999px870.x870.180119113134.j6s2/catalogue/malabar-gold-and-diamonds-jewellery-balasamudram-warangal-jewellery-showrooms-6v13e.jpg"
            alt=""
            width={80}
            height={80}
          />
          <h3 className={activeCategory === "jewelery" ? "green" : "black"}>
            Jewelery
          </h3>
        </div>

        <div
          onClick={() => {
            filterProducts("men's clothing", setProducts);
            setActiveCategory("mens");
          }}
        >
          <img
            className={activeCategory === "mens" ? "active" : "inactive"}
            src="https://tse4.mm.bing.net/th/id/OIP.fYTx_N6ZP0qkC67zBoPrIQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            width={80}
            height={80}
          />
          <h3 className={activeCategory === "mens" ? "green" : "black"}>
            Men's
          </h3>
        </div>

        <div
          onClick={() => {
            filterProducts("women's clothing", setProducts);
            setActiveCategory("womens");
          }}
        >
          <img
            className={activeCategory === "womens" ? "active" : "inactive"}
            src="https://st4.depositphotos.com/2939989/22379/i/1600/depositphotos_223799554-stock-photo-womens-clothes-set-isolated-female.jpg"
            alt=""
            width={80}
            height={80}
          />
          <h3 className={activeCategory === "womens" ? "green" : "black"}>
            Women's
          </h3>
        </div>
      </section>

      <section className="products-data">
        {products.map((product) => {
          return (
            <div className="card">
              <img src={product.image} alt="" width={"100%"} height={200} />
              <h4 style={{ color: "green" }}>{product.title}</h4>
              <p>$ {product.price}</p>
              <h4>{product.category}</h4>
              <Link to={`/product-details/${product.id}`}>
                <button>Product Details</button>
              </Link>
              <button>Add-To-Cart</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Products;
