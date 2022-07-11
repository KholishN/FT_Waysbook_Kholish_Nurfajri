import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { API } from "../../config/api";

import "../../style/navbar.css";

import Logo from "../../assets/Logo.png";
import DropdownCust from "../dropdown/DropdownCust";
import Login from "../auth/Login";
import Register from "../auth/Register";

function Navbar({ modalLogin, modalRegister }) {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({});
  const [fore, setFore] = useState([]);
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  const id = state.user.id;

  useEffect(() => {
    API.get(`/profile/${id}`)
      .then((res) => {
        setData(res.data.profile);
      })
      .catch((err) => console.log("error", err));

    API.get("/carts")
      .then((res) => {
        setFore(res.data.getCart);
      })
      .catch((err) => console.log("error", err));
  }, []);

  let nav = "";

  if (state.isLogin) {
    nav = (
      <div className="navRight">
        <DropdownCust logout={logout} />
      </div>
    );
  } else {
    nav = (
      <div className="navRight">
        <Login />
        <Register />
      </div>
    );
  }
  return (
    <nav className="navbar">
      <div className="navLeft">
        <Link to={state.user.role === "admin" ? "/list-transaction" : "/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      {nav}
    </nav>
  );
}

export default Navbar;
