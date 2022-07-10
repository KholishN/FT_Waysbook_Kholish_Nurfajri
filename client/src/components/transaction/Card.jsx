import React from "react";
import Trash from "../../assets/trash.png";

function Card({ item, handleDelete }) {
  return (
    <div className="cardCart">
      <div className="cardCartLeft">
        <img src={item.book.bookImg} alt="img" />
      </div>
      <div className="cardCartMiddle">
        <h1>{item?.book.title}</h1>
        <p className="cartAuth">By : {item?.book.author}</p>
        <p className="cartPrice">Rp.{item?.book.price}</p>
      </div>
      <div className="cardCartRight">
        <img src={Trash} alt="trash" onClick={() => handleDelete(item.id)} />
      </div>
    </div>
  );
}

export default Card;
