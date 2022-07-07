import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ListTransaction from "./pages/ListTransaction";
import AddBook from "./pages/AddBook";
import ComplainAdmin from "./pages/ComplainAdmin";
import Complain from "./pages/Complain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail-page" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/list-transaction" element={<ListTransaction />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/complain-admin" element={<ComplainAdmin />} />
          <Route path="/complain" element={<Complain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
