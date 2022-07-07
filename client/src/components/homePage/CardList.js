import React from "react";

const CardList = (props) => {
  let { imgSrc, bookTitle, author, bookPrice } = props.data;
  return (
    <div className="cardList">
      <div>
        <img src={imgSrc} alt="books" />
      </div>

      <div>
        <h1 className="titleBook">{bookTitle}</h1>
        <p className="auth">By : {author}</p>
        <p className="priceBook">Rp.{bookPrice}</p>
      </div>
    </div>
  );
};

export default CardList;
