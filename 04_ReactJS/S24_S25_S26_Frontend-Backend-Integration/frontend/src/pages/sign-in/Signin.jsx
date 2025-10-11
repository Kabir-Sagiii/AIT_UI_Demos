import "./Signin.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginContext from "../../components/context-api/logincontext";
import { loginUser } from "./Signin.js";

function Signin(props) {
  const { login } = useContext(loginContext);
  const [credentails, setCredentials] = useState({ email: "", password: "" });

  function handleUserEmail(event) {
    setCredentials({ ...credentails, email: event.target.value });
    // console.log("function called");
    // console.log(event.target); //inputDomElement
    // // event.target.style.border = "2px solid red";
    // console.log(event.target.value);
  }

  function handleUserPassword(event) {
    setCredentials({ ...credentails, password: event.target.value });
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="h4 text-primary" style={{ marginBottom: "10px" }}>
          Sign In Page
        </h2>
        <form className="login-form">
          <input type="text" placeholder="email" onChange={handleUserEmail} />

          <input
            type="password"
            placeholder="Password"
            onChange={handleUserPassword}
          />

          <button
            type="button"
            onClick={() => {
              loginUser(credentails, login);
              // console.log(credentails);
            }}
          >
            Sign In
          </button>
        </form>
        <div className="divider">OR</div>
        <button className="facebook-login">Log in with Facebook</button>
        <Link href="#" className="forgot-password">
          Forgot password?
        </Link>
      </div>
      <div className="signup-box">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}

export default Signin;
