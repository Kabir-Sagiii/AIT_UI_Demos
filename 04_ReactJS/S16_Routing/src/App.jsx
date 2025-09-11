import "./App.css";

import Nav from "./components/nav-bar/Navbar.jsx";
import Products from "./components/axios/products/Products.jsx";
import Home from "./components/home/Home.jsx";
import Signin from "./components/sign-in/Signin.jsx";
import Signup from "./components/sign-up/Signup.jsx";
import Profile from "./components/profile/Profile.jsx";
import ContactUs from "./components/contact-us/ContactUs.jsx";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/product-details/ProductDetails.jsx";
function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contact"} element={<ContactUs />} />
        <Route path={"/sign-in"} element={<Signin />} />
        <Route path={"/sign-up"} element={<Signup />} />
        <Route path={"/product-details"} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
