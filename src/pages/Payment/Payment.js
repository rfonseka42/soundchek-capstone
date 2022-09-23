import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import PaymentModal from "../../components/Modals/PaymentModal/PaymentModal";
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
    return <p></p>;
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
                className="room-confirm__img"
                src={singleRoom.imgUrl}
                alt="room-image"
              />
              <h2 className="room-confirm__title">Room Details</h2>
              <p>{singleRoom.company}</p>
              <p>{singleRoom.address}</p>
              <p>{singleRoom.people}</p>
              <p>${singleRoom.price}</p>
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
                  <label className="credit-container__label">
                    Card Detail
                    <input
                      className="credit-container__field"
                      type="text"
                      name="creditCard"
                    />
                  </label>
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
                <p>Total</p>
                <Link to={`/yourReservation/${singleRoom.id}`}>
                  <button>Pay $</button>
                </Link>
              </form>
              <button
                className="open-modal"
                onClick={() => {
                  setModalState(true);
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
