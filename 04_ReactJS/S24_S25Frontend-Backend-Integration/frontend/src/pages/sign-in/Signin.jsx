import "./Signin.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginContext from "../../components/context-api/logincontext";
import { loginUser } from "./Signin";

function Signin(props) {
  const { login } = useContext(loginContext);
  const [credentails, setCredentials] = useState({ email: "", password: "" });
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="h4 text-primary" style={{ marginBottom: "10px" }}>
          Sign In Page
        </h2>
        <form className="login-form">
          <input type="text" placeholder="email" />
          <input type="password" placeholder="Password" />

          <button
            type="button"
            onClick={() => {
              loginUser(credentails, login);
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
