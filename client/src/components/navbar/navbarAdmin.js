import React from "react";
import Logo from "../../assets/Logo.png";
import Cart from "../../assets/Cart.png";
import Photo from "../../assets/default-photo.png";
import addBook from "../../assets/addBook.png";
import Complain from "../../assets/menu-complain.png";
import Logout from "../../assets/menu-logout.png";
import { NavDropdown, Image } from "react-bootstrap";

import "../../style/navbar.css";
import { Link } from "react-router-dom";

function navbarAdmin() {
  // menu
  const UserMenu = (
    <Image
      src={Photo}
      alt="UserName profile image"
      roundedCircle
      style={{ width: "50px" }}
    />
  );

  const MenuAddBook = (
    <Image
      src={addBook}
      alt="addBook "
      style={{ width: "30px", marginRight: "10px" }}
    />
  );

  const MenuComplain = (
    <Image
      src={Complain}
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
  // /menu
  return (
    <nav className="navbar">
      <div className="navLeft">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navRight">
        <NavDropdown title={UserMenu} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            {MenuAddBook}Add Book
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            {MenuComplain}Complain
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            {MenuLogout}Logout
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </nav>
  );
}

export default navbarAdmin;
