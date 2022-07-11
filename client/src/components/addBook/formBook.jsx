import React from "react";
import PaperClip from "../../assets/paper-clip.png";
import Book from "../../assets/formbook.png";
import { Form, FloatingLabel } from "react-bootstrap";

function formBook({
  handleChange,
  handleSubmit,
  preview,
  handleChanges,
  previews,
}) {
  return (
    <div className="formCont">
      <form className="formWarp" onSubmit={handleSubmit}>
        <div className="warpAddimg">
          <Form.Control
            type="file"
            size="md"
            className="btnfile "
            name="bookImg"
            id="add-book-cover"
            onChange={handleChange}
            hidden
          />
          <label htmlFor="add-book-cover" className="btnfile mt-3">
            Attache Book Cover{" "}
            <img
              src={PaperClip}
              alt="cover"
              style={{ marginLeft: "10px", width: "15px" }}
            />
          </label>
          <div className="ms-4">
            <img src={preview} alt="" className="previewImg" />
          </div>
        </div>
        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="name@example.com"
            className="form-add"
            name="title"
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Author"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="name@example.com"
            className="form-add"
            name="author"
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Publication Date"
          className="mb-3 "
        >
          <Form.Control
            type="date"
            placeholder="name@example.com"
            name="year"
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Pages" className="mb-3">
          <Form.Control
            type="number"
            placeholder="name@example.com"
            name="pages"
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="ISBN" className="mb-3">
          <Form.Control
            type="number"
            placeholder="name@example.com"
            name="ISBN"
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
          <Form.Control
            type="number"
            placeholder="name@example.com"
            name="price"
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="About This Book">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            name="desc"
            style={{ height: "100px", resize: "none" }}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Form.Control
          type="file"
          size="md"
          className="btnfile"
          name="bookPdf"
          id="add-book-attch"
          onChange={handleChanges}
          hidden
        />
        <label htmlFor="add-book-attch" className="btnfile mt-4">
          Attache Book Cover{" "}
          <img
            src={PaperClip}
            alt="cover"
            style={{ marginLeft: "10px", width: "15px" }}
          />
        </label>
        <div className="ms-4 ppreviews">
          <p>{previews}</p>
        </div>

        <div className="warpButton-book">
          <button type="submit" className="warpButton-book">
            Add Book <img src={Book} alt="" className="btnBook" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default formBook;
