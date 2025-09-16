import { useContext } from "react";
import loginContext from "../context-api/logincontext";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  const { logout } = useContext(loginContext);
  return (
    <div className="nav">
      <div id="brand">
        <h1>Dude'sMart</h1>
      </div>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">ContactUs</Link>
      </div>
      <div id="icons">
        <i style={{ fontSize: "21px" }} className="bi bi-bag-check"></i>
        <i style={{ fontSize: "21px" }} className="bi bi-suit-heart-fill"></i>

        {/* <button
          type="button"
          onClick={() => {
            props.setIsLoggedIn(false);
          }}
        >
          Logout
        </button> */}

        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
