import "./Signup.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../js/actions/user";
import { loginUser } from "../../js/actions/user";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, lastname, email, password }, navigate));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, navigate));
  };

  return (
    <div className="con">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            width: "200px",
            color: "white",
            backgroundColor: "black",
            marginLeft: "50%",
          }}
        >
          close
        </button>
      </Link>
      <div className="body">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="txt"
                placeholder="last name"
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleRegister}>Sign up </button>
            </form>
          </div>
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
