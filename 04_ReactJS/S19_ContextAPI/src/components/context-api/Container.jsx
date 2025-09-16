// import React from "react";
// import Signin from "../sign-in/Signin";
// import Home from "../home/Home";
// function Container(props) {
//   var component;
//   if (props.isLoggedIn) {
//     component = <Home />;
//   } else {
//     component = <Signin setIsLoggedIn={props.setIsLoggedIn} />;
//   }
//   return <div>{component}</div>;
// }

// export default Container;

import { useContext } from "react";
import Signin from "../sign-in/Signin";
import Home from "../home/Home";
import loginContext from "./logincontext";
function Container() {
  const { isLoggedIn } = useContext(loginContext);

  var component;
  if (isLoggedIn) {
    component = <Home />;
  } else {
    component = <Signin />;
  }
  return <div>{component}</div>;
}

export default Container;
