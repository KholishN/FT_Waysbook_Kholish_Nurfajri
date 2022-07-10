import React, { useState } from "react";
import ModalCart from "../detailPage/ModalCart";
import { Link } from "react-router-dom";
import { API } from "../../config/api";

import "swiper/css";
import "swiper/css/free-mode";

const CardSlider = ({ item, state }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCart = async (id) => {
    try {
      if (state.isLogin) {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await API.post("/cart", { idProduct: id }, config);

        console.log(response);
        handleShow();
      }
    } catch (error) {}
  };
  return (
    <div className="cardSlide">
      <div className="middleLeft">
        <img src={item.bookImg} alt="cover" />
      </div>
      <div className="middleRight">
        <Link
          to={state.isLogin ? `/detail-page/` + item.id : "#"}
          className=" nav-link p-0 text-dark"
        >
          <h1 className="titleBook"> {item.title} </h1>
        </Link>

        <p className="auth">By : {item.author}</p>

        <p className="sinopsis">{item.desc}</p>

        <p className="priceBook">Rp.{item.price}</p>

        <button className="btnCard" onClick={() => handleCart(item.id)}>
          Add To Cart
        </button>
      </div>
      <ModalCart show={show} handleClose={handleClose} />
    </div>
  );
};

export default CardSlider;
