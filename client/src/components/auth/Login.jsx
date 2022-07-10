import React, { useState, useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../../context/UserContext";

import "../../style/modal.css";
import { Modal, Alert } from "react-bootstrap";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // auth
  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
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

      const response = await API.post("/login", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data,
      });

      console.log(response.data.data.role);
      if (response.data.data.role === "admin") {
        navigate("/list-transaction");
      } else {
        navigate("/");
      }

      setMessage(null);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          {error.response.data.message}
        </Alert>
      );
      setMessage(alert);
    }
  });

  // const checkAuth = () => {
  //   if (state.isLogin === true) {
  //     if (state.user.role === "customer") {
  //       navigate("/list-transaction");
  //     } else {
  //       navigate("/");
  //     }
  //   }
  // };
  // checkAuth();

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data for login process
      const response = await API.post("/login", body, config);

      // to know whos the user
      const user = response.data.data;

      // Send data to useContext
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user.user,
      });

      // Status check
      if (user.role === "admin") {
        navigate("/add-book");
      } else {
        navigate("/");
      }

      dispatch({
        type: "CLOSE",
      });

      const alert = (
        <div className="alert alert-success" role="alert">
          Login Success
        </div>
      );
      setMessage(alert);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <div>
      <button className="btnLogin" onClick={handleShow}>
        Login
      </button>
      <Modal show={show} onHide={handleClose} className="a">
        <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
          <div className="modal-contentt">
            <h1>Login</h1>
            {message && message}
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
            <button>Login</button>

            <p>
              Don't have an account ? Click
              <b>Here</b>
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Login;
