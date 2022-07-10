import React from "react";

import "../style/Complain.css";
import Navbar from "../components/navbar/Navbar";

import User from "../assets/default-photo.png";
import Send from "../assets/send.png";

function ComplainAdmin() {
  return (
    <div className="contCompAdmin">
      <Navbar />
      <h1>Customer Complain</h1>
      <div className="container">
        <div className="compLeft">
          <div className="card-user">
            <img src={User} alt="" />
            <p>Kholish Nurfajri</p>
          </div>
        </div>
        <div className="compRight">
          <div className="headerAdmin">
            <img src={User} alt="" />
            <div className="status-head">
              <p className="nama">Kholish Nurfajri</p>
              <div className="status-warp">
                <div className="dot-online"></div>
                <p className="status-online">Online</p>
              </div>
            </div>
          </div>
          <div className="chat-warp">
            <div
              className={`d-flex py-1 justify-content-end justify-content-start`}
            >
              <div className={"chat-me chat-other"}>
                <p>a</p>
              </div>
            </div>
          </div>
          <div className="chat-input-warp">
            <input type="text" className="send-message" />
            <button>
              <img src={Send} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplainAdmin;
