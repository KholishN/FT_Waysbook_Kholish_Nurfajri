import React from "react";
import { Modal } from "react-bootstrap";

function ModalDeleteCart({ show, handleClose }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="modal-edit">
        <div className="thank-you">
          <p>Delete Book on Your Cart Success</p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDeleteCart;
