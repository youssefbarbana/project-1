import React from "react";
import { Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../js/actions/user";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Navbar = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", fontSize: "18px" }}
      >
        <h1>market</h1>
      </Link>
      {/* <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => searchProduct(e.target.value)}
        />

        <Search />
      </div> */}
      <div className="button">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black", fontSize: "18px" }}
        >
          <h4>home</h4>
        </Link>

        <Link
          to="/product"
          style={{ textDecoration: "none", color: "black", fontSize: "18px" }}
        >
          <h4>product</h4>
        </Link>
        <Link
          to="/contactUs"
          style={{ textDecoration: "none", color: "black", fontSize: "18px" }}
        >
          <h4>contact us</h4>
        </Link>
        {isAuth ? (
          <Link to="/dashbord">
            <AccountBoxIcon style={{ fontSize: "27px", color: "red" }} />
          </Link>
        ) : null}
        {isAuth ? (
          <h4
            className="logout"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            logout
          </h4>
        ) : (
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "black", fontSize: "18px" }}
          >
            <h4>login</h4>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
