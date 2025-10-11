import { useRef } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const URL = "http://localhost:5001/auth/sign-up";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const cityRef = useRef(null);
  const passwordRef = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const registerUser = () => {
    var data = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      city: cityRef.current.value,
      phone: phoneRef.current.value,
    };

    axios
      .post(URL, data)
      .then(function (res) {
        //{ok:true,result:"--------"} // {ok:false,error:""}
        if (res.data.ok) {
          //something
          toast("Account Created", {
            autoClose: 1000,
            className: "success-notification",
          });

          setTimeout(() => {
            navigate("/");
          }, 2000);

          nameRef.current.value = "";
          passwordRef.current.value = "";
          emailRef.current.value = "";
          phoneRef.current.value = "";
          cityRef.current.value = "";
          genderRef.current.value = "";
        } else {
          throw Error(res.data.error);
        }
      })
      .catch(function (error) {
        toast.error(error.message, {
          className: "",
        });
        console.log(error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="h4 text-primary">Sign Up</h2>
        <form className="signup-form">
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            type="text"
            ref={cityRef}
            placeholder="City"
            name="city"
            required
          />

          <select name="gender" required ref={genderRef}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="tel"
            ref={phoneRef}
            placeholder="Phone Number"
            name="phone"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            ref={passwordRef}
          />

          <button type="button" onClick={registerUser}>
            Register
          </button>
        </form>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/">Have a Account ? Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
