import "./App.css";

import Nav from "./components/nav-bar/Navbar.jsx";
import Products from "./components/axios/products/Products.jsx";
function App() {
  return (
    <div>
      <Nav />
      <Products />
    </div>
  );
}

export default App;
