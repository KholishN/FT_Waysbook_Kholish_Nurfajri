import React from "react";
import Logo from "../../assets/Logo.png";
import "../../style/navbar.css";
import Login from "../auth/Login";
import Register from "../auth/Register";

function navbar({ modalLogin, modalRegister }) {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navRight">
        <Login />
        <Register />
      </div>
    </nav>
  );
}

export default navbar;
