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
          <div className="left">
            <div className="left__details">
              {singleRoom && (
                <h2 className="left__details left__details--heading">
                  {singleRoom.company}
                </h2>
              )}
              <div className="left__location">
                <div>
                  <p>{singleRoom.address}</p>
                  <p>{singleRoom.people}</p>
                </div>

                <p className="left__location left__location--bold">
                  ${singleRoom.price}/Hr
                </p>
              </div>
            </div>
            <div className="left__room">
              <img
                className="left__image"
                src={singleRoom.imgUrl}
                alt="drummer"
              />
              <p className="left__description">{singleRoom.description}</p>
            </div>
          </div>
          <div className="right">
            <div className="right__time">
              <div className="right__calendar">
                <label className="right__label">Date</label>
                <input
                  required
                  className="right__date"
                  type="date"
                  name="date"
                />
              </div>
              <div className="right__calendar">
                <label className="right__label">Start Time</label>
                <input
                  required
                  className="right__start"
                  type="time"
                  name="date"
                />
              </div>
              <div className="right__calendar">
                <label className="right__label">End Time</label>
                <input
                  required
                  className="right__end"
                  type="time"
                  name="date"
                />
              </div>
            </div>
            <div className="right__cta">
              <Link to={`/Payment/${singleRoom.id}`} className="right__btn">
                <button className="right__cta right__cta--book">Book</button>
              </Link>
              <Link to="/" className="right__cta right__cta--home">
                Find another room
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default RoomDetails;
