import React from "react";
import Trash from "../../assets/trash.png";

function Card({ imgSrc }) {
  return (
    <div className="cartLeft">
      <h2 className="review-order">Review Your order</h2>
      <div className="garisAtas"></div>
      <div className="cardCart">
        <div className="cardCartLeft">
          <img src={imgSrc} alt="img" />
        </div>
        <div className="cardCartMiddle">
          <h1>56 Hari: Perjalanan Kisah Cinta</h1>
          <p className="cartAuth">By : Destashya Wdp</p>
          <p className="cartPrice">Rp.59.000</p>
        </div>
        <div className="cardCartRight">
          <img src={Trash} alt="trash" />
        </div>
      </div>
      <div className="garisBawah"></div>
    </div>
  );
}

export default Card;
