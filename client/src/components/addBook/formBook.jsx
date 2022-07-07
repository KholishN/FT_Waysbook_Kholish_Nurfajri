import React from "react";
import PaperClip from "../../assets/paper-clip.png";
import Book from "../../assets/formbook.png";
import { Form, FloatingLabel } from "react-bootstrap";

function formBook() {
  return (
    <div className="formCont">
      <div>
        <img src="" alt="" className="previewImg" />
      </div>
      <form className="formWarp">
        <Form.Control
          type="file"
          size="md"
          className="btnfile"
          name="image"
          id="add-book-cover"
          hidden
        />
        <label htmlFor="add-book-cover" className="btnfile">
          Attache Book Cover{" "}
          <img
            src={PaperClip}
            alt="cover"
            style={{ marginLeft: "10px", width: "15px" }}
          />
        </label>
        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Publication Date"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Pages" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="ISBN" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="About This Book">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px", resize: "none" }}
          />
        </FloatingLabel>
        <Form.Control
          type="file"
          size="md"
          className="btnfile"
          name="image"
          id="add-book-cover"
          hidden
        />
        <label htmlFor="add-book-cover" className="btnfile mt-4">
          Attache Book Cover{" "}
          <img
            src={PaperClip}
            alt="cover"
            style={{ marginLeft: "10px", width: "15px" }}
          />
        </label>
        <div className="warpButton-book">
          <button>
            Add Book <img src={Book} alt="" className="btnBook" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default formBook;
