import React, { useState, useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../../context/UserContext";

import "../../style/modal.css";
import { Modal, Alert } from "react-bootstrap";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);

      handleClose();
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Password must have a minimum of 4 characters
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });
  return (
    <div>
      <button className="btnRegister" onClick={handleShow}>
        Register
      </button>
      <Modal show={show} onHide={handleClose} className="a">
        <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
          <div className="modal-contentt">
            <h1>Register</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Fullname"
              name="name"
              onChange={handleChange}
            />
            <button>Register</button>
            <p>
              Already have an account ? Click <b>Here</b>
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Register;
