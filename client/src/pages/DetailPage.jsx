import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import "../style/DetailPage.css";

import Navbar from "../components/navbar/Navbar";

import Cover1 from "../assets/coverbook1.jpg";
import Cart from "../assets/btn-cart.png";
import ModalCart from "../components/detailPage/ModalCart";

function DetailPage() {
  let { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { data } = useQuery("bookChace", async () => {
    const response = await API.get("/book/" + id);
    console.log(response.data.data);
    return response.data.data;
  });

  const [state, dispatch] = useContext(UserContext);

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
    <div className="cont">
      <Navbar />
      <div className="topdetail">
        <div className="topleft">
          <img src={data?.bookImg} alt="cover" />
        </div>
        <div className="topright">
          <ul>
            <li className="title-detail">{data?.title}</li>
            <li className="author-detail">By : {data?.author}</li>
            <li className="sub-title-detail">Publication Date</li>
            <li className="sub-detail">{data?.year}</li>
            <li className="sub-title-detail">Pages</li>
            <li className="sub-detail">{data?.pages}</li>
            <li className="sub-title-red-detail">ISBN</li>
            <li className="sub-detail">{data?.ISBN}</li>
            <li className="sub-title-detail">Price</li>
            <li className="sub-price">Rp.{data?.price}</li>
          </ul>
        </div>
      </div>
      <div className="bottom-detail">
        <div className="bottom-center-detail">
          <h1 className="about-book">About This Book</h1>
          <p className="about-desc-book">{data?.desc}</p>
        </div>
      </div>
      <div className="contBtn">
        <button className="btnCart" onClick={() => handleCart(data.id)}>
          Submit{" "}
          <img
            src={Cart}
            alt="Cart "
            style={{ width: "20px", marginLeft: "10px" }}
          />
        </button>
      </div>
      <ModalCart show={show} handleClose={handleClose} />
    </div>
  );
}

export default DetailPage;
