import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { useQuery } from "react-query";
import { API } from "../config/api";

import "../style/Cart.css";

import ModalDeleteCart from "../components/transaction/ModalDeleteCart";
import Card from "../components/transaction/Card";
import Subtotal from "../components/transaction/Subtotal";

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    API.get("/carts")
      .then((res) => {
        setCart(res.data.getCart);
        console.log(res);
      })
      .catch((err) => console.log("error", err));
  }, [show]);

  const handleDelete = async (id) => {
    await API.delete(`/cart/` + id);
    handleShow();
  };

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-ts_1Jrk1IUCqKMqQ";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const [alerts, setAlerts] = useState(false);

  const handleBuy = async () => {
    await API.post("/transaction")
      .then((res) => {
        console.log(res);
        // handleShows();

        const token = res.data.payment.token;

        window.snap.pay(token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */

            console.log(result);
            setAlerts(true);
            setTimeout(setAlerts, 3000);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            console.log(result);
            setAlerts(true);
            setTimeout(setAlerts, 3000);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contCart">
      <Navbar />
      <div className="warp">
        <h1 className="my-cart">My Cart</h1>
        <div className="cart-contain">
          <div className="cartLeft">
            <h2 className="review-order">Review Your order</h2>
            <div className="garisAtas"></div>
            {cart?.map((item, index) => (
              <Card item={item} key={index} handleDelete={handleDelete} />
            ))}
            <div className="garisBawah"></div>
          </div>
          <Subtotal carts={cart} handleBuy={handleBuy} />
        </div>
      </div>
      <ModalDeleteCart handleClose={handleClose} show={show} />
    </div>
  );
}

export default Cart;
