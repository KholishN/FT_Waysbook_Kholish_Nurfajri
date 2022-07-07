import Logo from "../../assets/Logo.png";
import Cart from "../../assets/Cart.png";
import Photo from "../../assets/default-photo.png";
import User from "../../assets/menu-user.png";
import Complain from "../../assets/menu-complain.png";
import Logout from "../../assets/menu-logout.png";
import { NavDropdown, Image } from "react-bootstrap";

import "../../style/navbar.css";
import { Link } from "react-router-dom";

function NavbarCustomer() {
  // menu
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
        <Link to="/" className="notification">
          <img src={Cart} alt="" className="cart" />
          <span class="badge">3</span>
        </Link>

        <NavDropdown title={UserMenu} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            {MenuProfile}Profile
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

export default NavbarCustomer;
