import "./PaymentModal.scss";

import React from "react";

function PaymentModal({ setOpenModal }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal__x">
            <button
              className="modal__x--btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="modal-container__title">
            <h1>Are You Sure You Want to Cancel?</h1>
          </div>
          <div className="modal-container__buttons">
            <a className="modal-container__buttons--link" href="/">
              <button className="modal-container__buttons modal-container__buttons--home ">
                Cancel Room
              </button>
            </a>

            <button
              className="modal-container__home modal-container__buttons--book"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Continue Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentModal;
