import "./BookingModal.scss";
import { useNavigate } from "react-router-dom";
import React from "react";

function BookingModal({ setOpenModal, handleDelete, id }) {
  const navigate = useNavigate();
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
            <h1>Are You Sure You Want to Cancel Your Reservation?</h1>
          </div>
          <div className="modal-container__buttons">
            <button
              className="modal-container__buttons modal-container__buttons--home"
              onClick={() => {
                handleDelete(id);
                navigate("/");
              }}
            >
              Cancel Room
            </button>

            <button
              className="modal-container__home modal-container__buttons--book"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Keep Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingModal;
