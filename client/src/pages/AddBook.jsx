import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router";
// import { useMutation } from "react-query";
import { API } from "../config/api";

import "../style/AddBook.css";
import FormBook from "../components/addBook/formBook";

function AddBook() {
  const title = "Add Book";
  document.title = "WaysBook | " + title;

  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [previews, setPreviews] = useState(null);
  const [form, setForm] = useState({
    title: "",
    year: "",
    author: "",
    pages: "",
    ISBN: "",
    price: "",
    desc: "",
    bookPdf: "",
    bookImg: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);

      setPreview(url);
    }
  };

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = e.target.files[0].name;

      setPreviews(url);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("bookPdf", form.bookPdf[0], form.bookPdf[0].name);
      formData.set("bookImg", form.bookImg[0], form.bookImg[0].name);
      formData.set("title", form.title);
      formData.set("year", form.year);
      formData.set("author", form.author);
      formData.set("pages", form.pages);
      formData.set("ISBN", form.ISBN);
      formData.set("price", form.price);
      formData.set("desc", form.desc);

      // Configuration
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Insert product data
      await API.post("/book", formData, config);
      setForm({
        title: "",
        year: "",
        author: "",
        pages: "",
        ISBN: "",
        price: "",
        desc: "",
        bookImg: "",
        bookPdf: "",
      });
      navigate("/list-transaction");
      setPreviews(null);
      setPreview(null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setForm();
  }, []);

  return (
    <div className="addBookCont">
      <Navbar />
      <div className="containerr">
        <h1 className="add-book-title">Add Book</h1>
        <FormBook
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          preview={preview}
          previews={previews}
          handleChanges={handleChanges}
        />
      </div>
    </div>
  );
}

export default AddBook;
