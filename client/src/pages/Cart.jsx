import React from "react";
import NavbarCustomer from "../components/navbar/NavbarCustomer";
import "../style/Cart.css";

import Cover1 from "../assets/coverbook1.jpg";

import Card from "../components/transaction/Card";
import Subtotal from "../components/transaction/Subtotal";

function Cart() {
  return (
    <div className="contCart">
      <NavbarCustomer />
      <div className="warp">
        <h1 className="my-cart">My Cart</h1>
        <div className="cart-contain">
          <Card imgSrc={Cover1} />
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
