import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import PaymentModal from "../../components/Modals/PaymentModal/PaymentModal";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import "./Payment.scss";

function Payment() {
  const [modalState, setModalState] = useState(false);

  const [rooms, setRooms] = useState([]);
  const [singleRoom, setSingleRoom] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    console.log("triggered");
    const rehearsalRoomsCollectionRef = collection(db, "rehearsalRooms");
    const getRehearsalRooms = async () => {
      const data = await getDocs(rehearsalRoomsCollectionRef);
      setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRehearsalRooms();
  }, []);

  useEffect(() => {
    console.log("triggeredx2");
    if (rooms) {
      const oneRoom = rooms.filter((room) => {
        return room.id === id;
      });
      setSingleRoom(oneRoom[0]);
    }
  }, [singleRoom, rooms]);

  if (!singleRoom) {
    return <p>loading...</p>;
  }

  if (singleRoom) {
    return (
      <>
        <Header />
        <div className="payment-wrapper">
          <h1 className="payment-wrapper__title">Confirm and Pay</h1>
          <div className="pay-container">
            <div className="room-confirm">
              <img
                className="room-confirm__picture"
                src={singleRoom.imgUrl}
                alt="room-image"
              />
              <h2 className="room-confirm__title">Room Details</h2>
              <p className="room-confirm__details">{singleRoom.company}</p>
              <p className="room-confirm__details">{singleRoom.address}</p>
              <p className="room-confirm__details">{singleRoom.people}</p>
              <p className="room-confirm__details">${singleRoom.price}/Hr</p>
            </div>
            <div className="pay-details">
              <h2 className="pay-details__header">Payment Details</h2>
              <p className="pay-details__subheading">
                Complete your purchase item by providing your payment details
                order
              </p>
              <form className="credit-container">
                <div>
                  <label className="credit-container__label">
                    Email Address
                    <input
                      className="credit-container__field"
                      type="text"
                      name="emailAddress"
                    />
                  </label>
                  <label className="credit-container__label--credit">
                    Card Number
                    <FaCcVisa className="credit-container__label--visa" />
                    <FaCcMastercard />
                    <input
                      className="credit-container__field--number"
                      type="text"
                      name="creditCard"
                    />
                  </label>
                  <div className="credit-container__expiry">
                    <label className="credit-container__label">
                      CCV
                      <input
                        className="credit-container__field"
                        type="text"
                        name="CCV"
                      />
                    </label>
                    <label className="credit-container__label">
                      Expiry
                      <input
                        className="credit-container__field"
                        type="text"
                        name="expiry"
                      />
                    </label>
                  </div>
                  <label className="credit-container__label">
                    Card Holder
                    <input
                      className="credit-container__field"
                      type="text"
                      name="emailAddress"
                    />
                  </label>
                  <label className="credit-container__label">
                    Billing Address
                    <input
                      className="credit-container__field"
                      type="text"
                      name="emailAddress"
                    />
                  </label>
                </div>
                <p className="credit-total">Total: $30</p>
                <Link to={`/yourReservation/${singleRoom.id}`}>
                  <button className="credit-container__payment">Pay $</button>
                </Link>
              </form>
              <button
                className="open-modal"
                onClick={() => {
                  setModalState(true);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
          {modalState && <PaymentModal setOpenModal={setModalState} />}
        </div>
        <Footer />
      </>
    );
  }
}

export default Payment;
