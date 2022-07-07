import React from "react";
import "../../style/modal.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="btnLogin" onClick={handleShow}>
        Login
      </button>
      <Modal show={show} onHide={handleClose} className="a">
        <div className="modal-contentt">
          <h1>Login</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p>
            Don't have an account ? Click <b>Here</b>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
