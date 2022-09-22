import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./RoomDetails.scss";
import drummer from "../../assets/images/placeholder.png";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  onSnapshot,
  snapshot,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";
import { FirebaseError } from "firebase/app";

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

  // useEffect(() => {
  //   console.log("running");
  //   const colRef = collection(db,"rehearsalRooms");
  //   const q = query(colRef, where(""))
  //   const docRef = doc(db, "rehearsalRooms", id);

  //   onSnapshot(
  //     docRef,
  //     (snapshot) => {
  //      set(snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));)
  //
  //     },
  //     []
  //   );
  // });

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  // const [rehearsalRoom, setRehearsalRooms] = useState([]);

  // useEffect(() => {
  //   const colRef = collection(db, "rehearsalRooms");
  //   const q = query(colRef, where("rehearsalRoom", "array-contains", id));

  //   onSnapshot(q, (snapshot) => {
  //     let myRoom = [];
  //     snapshot.docs.forEach((doc) => {
  //      myRoom.push({...doc.data(), id: doc.id})
  //
  //     })
  //
  // }, []);

  // if (!singleRoom[0]) {
  //   return <p></p>;
  // }
  if (!singleRoom) {
    return <p></p>;
  }
  // if (singleRoom[0].price) {
  //   console.log(singleRoom[0].price);
  // }
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
                <p>{singleRoom.address}</p>
                <p>{singleRoom.people}</p>
              </div>
            </div>
            <div className="room-image">
              <img
                className="room-image__placeholder"
                src={drummer}
                alt="drummer"
              />
            </div>
          </div>
          <div className="room-right">
            <p className="room-right__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum integer enim neque volutpat ac tincidunt vitae. Pulvinar
              pellentesque habitant morbi tristique senectus et netus. Turpis
              tincidunt id aliquet risus feugiat. Quam id leo in vitae turpis
              massa sed elementum tempus.
            </p>
            <p className="room-right__time">Time Picker</p>
            <div className="room-right__cta">
              <button className="room-right__cta room-right__cta--book">
                <Link to="/payment">Book</Link>
              </button>
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
