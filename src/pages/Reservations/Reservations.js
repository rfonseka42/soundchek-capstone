import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Reservations.scss";

function Reservations() {
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
    return <p>You have no Upcoming Reservations</p>;
  }

  if (singleRoom) {
    return (
      <>
        <Header />
        <h2>Your Reservations</h2>

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
          <Link to={"/"}>
            <button onClick={() => handleDelete(singleRoom.id)}>
              Cancel Reservation
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

export default Reservations;
