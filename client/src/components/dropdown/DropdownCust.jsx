import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "../../config/api";

import Cart from "../../assets/Cart.png";
import Photo from "../../assets/default-photo.png";
import User from "../../assets/menu-user.png";
import Complain from "../../assets/menu-complain.png";
import ComplainAdmin from "../../assets/admin-complain.png";
import Logout from "../../assets/menu-logout.png";
import addBook from "../../assets/addBook.png";

function DropdownCust({ logout }) {
  const [state] = useContext(UserContext);
  const [bubble, setBubble] = useState([]);

  useEffect(() => {
    API.get("/carts")
      .then((res) => {
        setBubble(res.data.getCart);
      })
      .catch((err) => console.log("error", err));
  });

  const UserMenu = (
    <Image
      src={Photo}
      alt="UserName profile image"
      roundedCircle
      style={{ width: "50px" }}
    />
  );

  const MenuProfile = (
    <Image
      src={User}
      alt="profile "
      style={{ width: "30px", marginRight: "10px" }}
    />
  );

  const MenuComplain = (
    <Image
      src={state.user.role === "customer" ? Complain : ComplainAdmin}
      alt="Complain "
      style={{ width: "30px", marginRight: "10px" }}
    />
  );

  const MenuLogout = (
    <Image
      src={Logout}
      alt="Logout "
      style={{ width: "30px", marginRight: "10px" }}
    />
  );
  const MenuAddBook = (
    <Image
      src={addBook}
      alt="addBook "
      style={{ width: "30px", marginRight: "10px" }}
    />
  );
  return (
    <div className="navRight">
      <Link
        to="/cart"
        className={state.user.role === "customer" ? "notification" : "d-none"}
      >
        <img src={Cart} alt="" className="cart" />
        <span className={bubble?.length === 0 ? "d-none" : "badge"}>
          {bubble.length}
        </span>
      </Link>

      <NavDropdown title={UserMenu} id="basic-nav-dropdown">
        <NavDropdown.Item
          className={state.user.role === "customer" ? "navProfile" : "d-none"}
        >
          <Link to="/profile" className="navtext">
            {MenuProfile}Profile
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item
          className={state.user.role === "admin" ? "navAdmin" : "d-none"}
        >
          <Link to="/add-book" className="navtext">
            {MenuAddBook}Add Book
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link
            to={
              state.user.role === "customer" ? "/complain" : "/complain-admin"
            }
            className="navtext"
          >
            {MenuComplain}Complain
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout}>{MenuLogout}Logout</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default DropdownCust;
