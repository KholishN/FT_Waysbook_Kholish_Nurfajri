import React, { useState } from "react";
import ModalCart from "../detailPage/ModalCart";

const CardSlider = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let { imgSrc, bookTitle, author, sinopsis, bookPrice } = props.data;
  return (
    <div className="cardSlide">
      <div className="middleLeft">
        <img src={imgSrc} alt="cover" />
      </div>
      <div className="middleRight">
        <h1 className="titleBook"> {bookTitle} </h1>

        <p className="auth">By : {author}</p>

        <p className="sinopsis">{sinopsis}</p>

        <p className="priceBook">Rp.{bookPrice}</p>

        <button className="btnCard" onClick={handleShow}>
          Add To Cart
        </button>
      </div>
      <ModalCart show={show} handleClose={handleClose} />
    </div>
  );
};

export default CardSlider;
