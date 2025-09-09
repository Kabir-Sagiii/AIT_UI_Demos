import React from "react";
import "./Products.css";
function Products() {
  return (
    <div>
      <section className="product-banner">
        <h1>Elctronic Products Information</h1>
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
        <div>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.j9HypQr5EAEYMLgxv4GnNgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            width={80}
            height={80}
          />
          <h3>All</h3>
        </div>

        <div>
          <img
            src="https://c8.alamy.com/comp/2KP7X29/group-of-home-appliances-and-consumer-electronics-isolated-on-white-background-3d-illustration-2KP7X29.jpg"
            alt=""
            width={80}
            height={80}
          />
          <h3>Electronics</h3>
        </div>

        <div>
          <img
            src="https://content3.jdmagicbox.com/comp/warangal/s2/9999px870.x870.180119113134.j6s2/catalogue/malabar-gold-and-diamonds-jewellery-balasamudram-warangal-jewellery-showrooms-6v13e.jpg"
            alt=""
            width={80}
            height={80}
          />
          <h3>Jewelery</h3>
        </div>

        <div>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.fYTx_N6ZP0qkC67zBoPrIQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            width={80}
            height={80}
          />
          <h3>Men's</h3>
        </div>

        <div>
          <img
            src="https://st4.depositphotos.com/2939989/22379/i/1600/depositphotos_223799554-stock-photo-womens-clothes-set-isolated-female.jpg"
            alt=""
            width={80}
            height={80}
          />
          <h3>Women's</h3>
        </div>
      </section>

      <section className="products-data">
        <div className="card">
          <img src="" alt="" width={"100%"} height={200} />
          <h3>Product Name</h3>
          <p>$ 50</p>
          <h4>Category Name</h4>
          <button>Product Details</button>
          <button>Add-To-Cart</button>
        </div>
      </section>
    </div>
  );
}

export default Products;
