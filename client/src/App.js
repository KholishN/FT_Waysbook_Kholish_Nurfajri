import "./style/index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";

// pages

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ListTransaction from "./pages/ListTransaction";
import AddBook from "./pages/AddBook";
import ComplainAdmin from "./pages/ComplainAdmin";
import Complain from "./pages/Complain";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isLogin === false) {
      navigate("/");
    } else {
      if (state.user.role === "admin") {
        navigate("/list-transaction");
      } else if (state.user.role === "customer") {
        navigate("/");
      }
    }
  }, [state]);

  const checkAuth = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkAuth();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail-page/:id" element={<DetailPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/list-transaction" element={<ListTransaction />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/complain-admin" element={<ComplainAdmin />} />
      <Route path="/complain" element={<Complain />} />
    </Routes>
  );
}

export default App;
