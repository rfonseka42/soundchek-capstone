import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import BookingModal from "../../components/Modals/BookingModal/BookingModal";
import { db } from "../../firebase";

import "./Reservations.scss";

function Reservations() {
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "rehearsalRooms", id));
      setRooms(rooms.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (!singleRoom) {
    return (
      <>
        <Header />
        <p className="noBooks">You have no Upcoming Reservations</p>
        <Footer />
      </>
    );
  }

  if (singleRoom) {
    return (
      <>
        <Header />
        <h2 className="reservations">Your Reservations</h2>

        <div className="space">
          <img
            className="space__img"
            src={singleRoom.imgUrl}
            alt="room-image"
          />
          <div className="space__details">
            <p>{singleRoom.company}</p>
            <p className="space__details--light">{singleRoom.address}</p>
            <p className="space__details--light">{singleRoom.people}</p>
            <p>${singleRoom.price}</p>
            <Link to={"/"} className="space__details-link">
              <button
                onClick={() => {
                  setModalState(true);
                  handleDelete(singleRoom.id);
                }}
                className="space__btn open-modal"
              >
                Cancel Reservation
              </button>
            </Link>
          </div>
          {modalState && <BookingModal setOpenModal={setModalState} />}
        </div>
        <Footer />
      </>
    );
  }
}

export default Reservations;
