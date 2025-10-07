import "./App.css";
import { useState } from "react";
import Nav from "./components/nav-bar/Navbar.jsx";
import Container from "./components/context-api/Container.jsx";
import loginContext from "./components/context-api/logincontext.js";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const reduxData = useSelector((store) => {
    return store.name;
  });

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <ToastContainer />
      <loginContext.Provider value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Nav /> : null}
        <Container />
      </loginContext.Provider>
    </div>
  );
}

export default App;
