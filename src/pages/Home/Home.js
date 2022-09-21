import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";

function Home() {
  const [rehearsalRooms, setRehearsalRooms] = useState([]);
  const rehearsalRoomsCollectionRef = collection(db, "rehearsalRooms");

  useEffect(() => {
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
      <h2>Room Details Page</h2>
      <div className="card-wrap">
        {rehearsalRooms.map((rehearsalRoom) => {
          return (
            <div className="card" key={rehearsalRoom.id}>
              <div className="card__top">
                <img
                  className="card__img"
                  src={rehearsalRoom.imgUrl}
                  alt="room"
                />
              </div>
              <div className="card__bottom">
                <div className="card__bottom--left">
                  <p>{rehearsalRoom.name}</p>
                  <p>{rehearsalRoom.address}</p>
                  <p>{rehearsalRoom.company}</p>
                  <p>${rehearsalRoom.price}/Hr</p>
                </div>
                <div className="card__bottom--right">
                  <p>{rehearsalRoom.people}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;
