import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products.jsx";
import Profile from "../../pages/profile/Profile";
import Signin from "../../pages/sign-in/Signin";
import Signup from "../../pages/sign-up/Signup";
import Contact from "../../pages/contact/Contact.jsx";
import ProductDetails from "../../pages/product-details/ProductDetails";
import loginContext from "./logincontext";

function Container() {
  const { isLoggedIn } = useContext(loginContext);

  return (
    <div>
      <Routes>
        <Route path={"/"} element={isLoggedIn ? <Home /> : <Signin />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/sign-up"} element={<Signup />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default Container;
