import React from "react";

import { Modal } from "react-bootstrap";

function ModalCart({ show, handleClose }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="modal-edit">
        <div className="thank-you">
          <p>The product is successfully added to the cart</p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalCart;
