import React from "react";
import "../../style/modal.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="btnRegister" onClick={handleShow}>
        Register
      </button>
      <Modal show={show} onHide={handleClose} className="a">
        <div className="modal-contentt">
          <h1>Register</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Fullname" />
          <button>Register</button>
          <p>
            Already have an account ? Click <b>Here</b>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Register;
