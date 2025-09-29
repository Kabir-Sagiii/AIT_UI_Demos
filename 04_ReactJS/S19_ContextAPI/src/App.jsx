// import "./App.css";
// import { useState } from "react";
// import Nav from "./components/nav-bar/Navbar.jsx";
// import Products from "./components/axios/products/Products.jsx";
// import Home from "./components/home/Home.jsx";
// import Signin from "./components/sign-in/Signin.jsx";
// import Signup from "./components/sign-up/Signup.jsx";
// import Profile from "./components/profile/Profile.jsx";
// import ContactUs from "./components/contact-us/ContactUs.jsx";
// import { Route, Routes } from "react-router-dom";
// // import A from "./components/Props-Drilling/A.jsx";
// import A from "./components/context-api/A.jsx";
// import ProductDetails from "./components/product-details/ProductDetails.jsx";
// import Container from "./components/context-api/Container.jsx";
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <div>
//       {isLoggedIn ? <Nav setIsLoggedIn={setIsLoggedIn} /> : null}

//       <Container isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

//       {/* <Routes>
//         <Route path={"/"} element={<Home />} />
//         <Route path={"/products"} element={<Products />} />
//         <Route path={"/profile"} element={<Profile />} />
//         <Route path={"/contact"} element={<ContactUs />} />
//         <Route path={"/sign-in"} element={<Signin />} />
//         <Route path={"/sign-up"} element={<Signup />} />
//         <Route path={"/product-details/:id"} element={<ProductDetails />} />
//       </Routes> */}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import Nav from "./components/nav-bar/Navbar.jsx";
import Container from "./components/context-api/Container.jsx";
import loginContext from "./components/context-api/logincontext.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <loginContext.Provider value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Nav /> : null}
       cd..
      </loginContext.Provider>
    </div>
  );
}

export default App;
