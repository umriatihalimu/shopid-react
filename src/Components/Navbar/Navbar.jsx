import React, { useState } from "react";
import "./Navbar.css";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-log">
        <img src="" alt="" />
        <p>SHOPID</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "rgb(108, 104, 104)" }}
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link
            to={"/women"}
            style={{ textDecoration: "none", color: "rgb(108, 104, 104)" }}
          >
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link
            to={"/men"}
            style={{ textDecoration: "none", color: "rgb(108, 104, 104)" }}
          >
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link
            to="/kids"
            style={{ textDecoration: "none", color: "rgb(108, 104, 104)" }}
          >
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            Login
          </Link>
        </button>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <FaCartArrowDown size={24} />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
