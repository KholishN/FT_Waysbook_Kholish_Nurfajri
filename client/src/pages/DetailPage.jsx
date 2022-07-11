import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import "../style/DetailPage.css";

import Navbar from "../components/navbar/Navbar";
import Rupiah from "rupiah-format";

import Cover1 from "../assets/coverbook1.jpg";
import Cart from "../assets/btn-cart.png";
import ModalCart from "../components/detailPage/ModalCart";

function DetailPage() {
  let { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { data: book } = useQuery("bookChace", async () => {
    const response = await API.get("/book/" + id);
    return response.data.data;
  });
  console.log(book);

  let { data: purchased } = useQuery("purchasedChace", async () => {
    const response = await API.get("/purchased/" + id);
    return response.data.purBook;
  });

  const [state] = useContext(UserContext);

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
    <div className="cont">
      <Navbar />
      <div className="topdetail">
        <div className="topleft">
          <img src={book?.bookImg} alt="cover" />
        </div>
        <div className="topright">
          <ul>
            <li className="title-detail">{book?.title}</li>
            <li className="author-detail">By : {book?.author}</li>
            <li className="sub-title-detail">Publication Date</li>
            <li className="sub-detail">{book?.year}</li>
            <li className="sub-title-detail">Pages</li>
            <li className="sub-detail">{book?.pages}</li>
            <li className="sub-title-red-detail">ISBN</li>
            <li className="sub-detail">{book?.ISBN}</li>
            <li className="sub-title-detail">Price</li>
            <li className="sub-price">{Rupiah.convert(book?.price)}</li>
          </ul>
        </div>
      </div>
      <div className="bottom-detail">
        <div className="bottom-center-detail">
          <h1 className="about-book">About This Book</h1>
          <p className="about-desc-book">{book?.desc}</p>
        </div>
      </div>
      <div className="contBtn">
        {purchased === null ? (
          <button className="btnCart" onClick={() => handleCart(book.id)}>
            Submit{" "}
            <img
              src={Cart}
              alt="Cart "
              style={{ width: "20px", marginLeft: "10px" }}
            />
          </button>
        ) : (
          <a href={book?.bookPdf} className="aCart">
            Download{" "}
          </a>
        )}
      </div>
      <ModalCart show={show} handleClose={handleClose} />
    </div>
  );
}

export default DetailPage;
