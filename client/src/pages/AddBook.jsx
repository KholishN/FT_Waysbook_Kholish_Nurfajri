import React from "react";
import NavbarAdmin from "../components/navbar/navbarAdmin";

import "../style/AddBook.css";
import FormBook from "../components/addBook/formBook";

function AddBook() {
  return (
    <div className="addBookCont">
      <NavbarAdmin />
      <div className="container">
        <h1 className="add-book-title">Add Book</h1>
        <FormBook />
      </div>
    </div>
  );
}

export default AddBook;
