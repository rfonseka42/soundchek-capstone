import "./PaymentModal.scss";

import React from "react";

function PaymentModal({ setOpenModal }) {
  return (
    <div className="modal-background">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Cancel?</h1>
        </div>
        <div className="footer">
          <a href="/">
            <button id="cancelBtn">Cancel and go Home</button>
          </a>

          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Continue Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
