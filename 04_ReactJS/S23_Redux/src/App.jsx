import "./App.css";
import { useState } from "react";
import Nav from "./components/nav-bar/Navbar.jsx";
import Container from "./components/context-api/Container.jsx";
import loginContext from "./components/context-api/logincontext.js";
import CounterRef from "./components/use-ref/CounterRef.jsx";
import RefDom from "./components/use-ref/RefDom.jsx";
import Counter from "./components/use-reducer/Counter.jsx";
import Name from "./redux/components/Name.jsx";
import Display from "./redux/components/Display.jsx";
import { useSelector } from "react-redux";
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
      <h2 style={{ padding: "50px" }}>{reduxData}</h2>
      <hr />
      <Name />
      <hr />
      <Display />

      {/* <loginContext.Provider value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Nav /> : null}
        <Container />
      </loginContext.Provider> */}
    </div>
  );
}

export default App;
