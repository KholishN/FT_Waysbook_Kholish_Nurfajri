import React from "react";
import ModalTransaction from "./ModalTransaction";

function Subtotal() {
  return (
    <div className="cartRight">
      <div className="garisAtas"></div>
      <div className="cartRightwarp">
        <div className="cartLeft-left">
          <p>Subtotal</p>
          <p>Qty</p>
        </div>
        <div className="cartLeft-right">
          <p>Rp.59.000</p>
          <p>2</p>
        </div>
      </div>
      <div className="garisBawahh"></div>
      <div className="cartRightwarp">
        <div className="cartRight-left">
          <p>Total</p>
        </div>
        <div className="cartRight-right">
          <p>Rp.59.000</p>
        </div>
      </div>
      <ModalTransaction />
    </div>
  );
}

export default Subtotal;
