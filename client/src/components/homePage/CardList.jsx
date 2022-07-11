import React from "react";
import { Link } from "react-router-dom";
import Rupiah from "rupiah-format";

const CardList = ({ item, state }) => {
  return (
    <div className="cardList">
      <div>
        <Link
          to={state.isLogin ? `/detail-page/` + item.id : "#"}
          className=" nav-link p-0 text-dark"
        >
          <img src={item.bookImg} alt="books" />
        </Link>
      </div>

      <div>
        <Link
          to={state.isLogin ? `/detail-page/` + item.id : "#"}
          className=" nav-link p-0 text-dark"
        >
          <h1 className="titleBook">{item.title.substr(0, 30)}</h1>
        </Link>
        <p className="auth">By : {item.author}</p>
        <p className="priceBook">{Rupiah.convert(item.price)}</p>
      </div>
    </div>
  );
};

export default CardList;
