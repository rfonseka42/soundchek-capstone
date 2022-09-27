import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./RoomDetails.scss";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

function RoomDetails() {
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
    return <p>Loading...</p>;
  }

  if (singleRoom) {
    return (
      <>
        <Header />
        <div className="room">
          <div className="room-left">
            <div className="room-details">
              {singleRoom && (
                <h2 className="room-details__name">{singleRoom.company}</h2>
              )}
              <div className="room-details__other">
                <div>
                  <p>{singleRoom.address}</p>
                  <p>{singleRoom.people}</p>
                </div>

                <p className="room-details__other room-details__other--bold">
                  ${singleRoom.price}/Hr
                </p>
              </div>
            </div>
            <div className="room-image">
              <img
                className="room-image__room"
                src={singleRoom.imgUrl}
                alt="drummer"
              />
            </div>
          </div>
          <div className="room-right">
            <p className="room-right__description">{singleRoom.description}</p>
            <div className="room-right__time">
              <div className="room-right__calendar">
                <label className="room-right__label">Date</label>
                <input
                  required
                  className="room-right__date"
                  type="date"
                  name="date"
                />
              </div>
              <div className="room-right__calendar">
                <label className="room-right__label">Start Time</label>
                <input
                  required
                  className="room-right__start"
                  type="time"
                  name="date"
                />
              </div>
              <div className="room-right__calendar">
                <label className="room-right__label">End Time</label>
                <input
                  required
                  className="room-right__end"
                  type="time"
                  name="date"
                />
              </div>
            </div>
            <div className="room-right__cta">
              <Link
                to={`/Payment/${singleRoom.id}`}
                className="room-right__btn"
              >
                <button className="room-right__cta room-right__cta--book">
                  Book
                </button>
              </Link>
              <a className="room-right__cta room-right__cta--home" href="/">
                Find another room
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default RoomDetails;
