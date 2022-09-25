import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  const [rehearsalRooms, setRehearsalRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);

  const selectRoom = (id) => {
    let foundRoom = rehearsalRooms.find((rehearsalRoom) => {
      return id === rehearsalRoom.id;
    });

    console.log(foundRoom);
    setSelectedRoom(foundRoom);
  };

  useEffect(() => {
    const rehearsalRoomsCollectionRef = collection(db, "rehearsalRooms");
    const getRehearsalRooms = async () => {
      const data = await getDocs(rehearsalRoomsCollectionRef);
      setRehearsalRooms(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getRehearsalRooms();
  }, []);

  return (
    <>
      <Header />
      <Hero />

      <div className="card-wrap">
        {rehearsalRooms.map((rehearsalRoom) => {
          return (
            <Link to={`/roomDetails/${rehearsalRoom.id}`} className="card-link">
              <div className="card" key={rehearsalRoom.id}>
                <div className="card-top">
                  <div className="card-top__outline"></div>
                  <img
                    className="card-top__img"
                    src={rehearsalRoom.imgUrl}
                    alt="room"
                  />
                </div>
                <div className="card__bottom">
                  <div className="card__bottom--left">
                    <p className="card__bottom--bold">{rehearsalRoom.name}</p>
                    <p className="card__bottom--item">
                      {rehearsalRoom.company}
                    </p>
                    <p className="card__bottom--item">
                      {rehearsalRoom.address}
                    </p>
                    <p className="card__bottom--bold">
                      ${rehearsalRoom.price}/Hr
                    </p>
                  </div>
                  <div className="card__bottom--right">
                    <p className="card__bottom--bold">{rehearsalRoom.people}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;
