import React, { useState } from "react";
import ModalCart from "../detailPage/ModalCart";
import { Link, useParams } from "react-router-dom";
import { API } from "../../config/api";
import Rupiah from "rupiah-format";
import { useQuery } from "react-query";

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
        await API.post("/cart", { idProduct: id }, config);

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
        <div className="conttitlepromo">
          <Link
            to={state.isLogin ? `/detail-page/` + item.id : "#"}
            className=" nav-link p-0 text-dark"
          >
            <h1 className="titleBook"> {item.title.substr(0, 30)} </h1>
          </Link>

          <p className="auth">By : {item.author}</p>
        </div>
        <div className="contdesc">
          <p className="sinopsis">{item.desc.substr(0, 110)}..</p>
        </div>
        <div className="contprice">
          <p className="priceBook">{Rupiah.convert(item.price)}</p>
        </div>
        <div className="contbtnpromo">
          <button className="btnCard" onClick={() => handleCart(item.id)}>
            Add To Cart
          </button>
        </div>
      </div>
      <ModalCart show={show} handleClose={handleClose} />
    </div>
  );
};

export default CardSlider;
