import "./App.css";
import { useState } from "react";
import Nav from "./components/nav-bar/Navbar.jsx";
import Container from "./components/context-api/Container.jsx";
import loginContext from "./components/context-api/logincontext.js";
import CounterRef from "./components/use-ref/CounterRef.jsx";
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
      <CounterRef />
      {/* <loginContext.Provider value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Nav /> : null}
        <Container />
      </loginContext.Provider> */}
    </div>
  );
}

export default App;
