import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ModalTransaction() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="btnPay" onClick={handleShow}>
        Pay
      </button>
      <Modal show={show} onHide={handleClose} className="modal-edit">
        <div className="thank-you">
          <p>
            Thank you for ordering in us, please wait 1 x 24 hours to verify you
            order
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalTransaction;
