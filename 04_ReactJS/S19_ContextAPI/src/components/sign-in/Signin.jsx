import "./Signin.css";
import { useContext } from "react";
import loginContext from "../context-api/logincontext";

function Signin(props) {
  const { login } = useContext(loginContext);
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="h4 text-primary" style={{ marginBottom: "10px" }}>
          Sign In Page
        </h2>
        <form className="login-form">
          <input type="text" placeholder="email" />
          <input type="password" placeholder="Password" />
          {/* <button
            type="button"
            onClick={() => {
              //Get username or email and password
              //send post request with above username or email and password
              //once we receive the success response call following code

              props.setIsLoggedIn(true);

              //if we receive error response then call notification function
              //and inform user check email or username and password
            }}
          >
            Sign In
          </button> */}

          <button type="button" onClick={login}>
            Sign In
          </button>
        </form>
        <div className="divider">OR</div>
        <button className="facebook-login">Log in with Facebook</button>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
      </div>
      <div className="signup-box">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </div>
  );
}

export default Signin;
