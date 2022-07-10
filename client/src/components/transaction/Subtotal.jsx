import React from "react";
import ModalTransaction from "./ModalTransaction";

function Subtotal({ carts, handleBuy }) {
  let resultQty = carts.reduce((a, b) => {
    return a + b.qty;
  }, 0);

  let resultPrice = carts.reduce((a, b) => {
    return a + b.total;
  }, 0);
  return (
    <div className="cartRight">
      <div className="garisAtas"></div>
      <div className="cartRightwarp">
        <div className="cartLeft-left">
          <p>Subtotal</p>
          <p>Qty</p>
        </div>
        <div className="cartLeft-right">
          <p>{resultPrice}</p>
          <p>{resultQty}</p>
        </div>
      </div>
      <div className="garisBawahh"></div>
      <div className="cartRightwarp">
        <div className="cartRight-left">
          <p>Total</p>
        </div>
        <div className="cartRight-right">
          <p className="totalPrice">{resultPrice}</p>
        </div>
      </div>
      <ModalTransaction handleBuy={handleBuy} />
    </div>
  );
}

export default Subtotal;
