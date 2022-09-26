import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
// import { v4 } from "uuid";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   list,
//   listAll,
// } from "firebase/storage";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./RentYourSpace.scss";

function RentYourSpace() {
  const [newCompany, setNewCompany] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPeople, setNewPeople] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const createRoomCollectionRef = collection(db, "rehearsalRooms");
  //   const [imageUpload, setImageUpload] = useState(null);
  //   const [imageLink, setImageLink] = useState([]);
  //   const [imageUrls, setImageUrls] = useState([]);

  const createRoom = async (event) => {
    event.preventDefault();
    await addDoc(createRoomCollectionRef, {
      company: newCompany,
      address: newAddress,
      name: newName,
      description: newDescription,
      people: newPeople,
      price: newPrice,
    });
  };

  //   const imagesListRef = ref(storage, "images/");
  //   const uploadImage = () => {
  //     if (imageUpload == null) return;
  //     const imageRef = ref(storage, `${imageUpload.name + v4()}`);
  //     uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //       getDownloadURL(snapshot.ref).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   };

  //   useEffect(() => {
  //     listAll(imagesListRef).then((response) => {
  //       response.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setImageUrls((prev) => [...prev, url]);
  //         });
  //       });
  //     });
  //   }, []);

  //   const uploadImage = () => {
  //     if (imageUpload == null) return;
  //     const imageLink = `${imageUpload.name + v4()}`;
  //     const imageRef = ref(storage, imageLink);
  //     // const imageRef = ref(storage, `${imageUpload.name + v4()}`);
  //     uploadBytes(imageRef, imageUpload).then(() => {
  //       myImageLink(imageRef);
  //     });
  //   };

  //   const myImageLink = (imageRef) => {
  //     getDownloadURL(imageRef).then((url) => {
  //       setImageLink(url);
  //     });
  //   };

  return (
    <>
      <Header />

      <h1 className="page-title">Rent your space!</h1>
      <p className="page-title__subheader">
        So, you're ready to rent out your garage, attic or basement to aspiring
        bands? Simply enter your info below to create a new listing.
      </p>
      <div className="room-container">
        <form className="roomRent" onSubmit={createRoom}>
          {/* <div className="upload-image">
          <label className="upload-image__label">Choose Image</label>
          <input
            required
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload Image</button>
        </div> */}
          <div className="rent">
            <label className="rent__label">Company Name</label>
            <input
              className="rent__field"
              type="text"
              onChange={(event) => {
                setNewCompany(event.target.value);
              }}
            ></input>
            <label className="rent__label">Address</label>

            <input
              className="rent__field"
              type="text"
              onChange={(event) => {
                setNewAddress(event.target.value);
              }}
            ></input>
            <label className="rent__label"> Name of Your Room</label>

            <input
              className="rent__field"
              type="text"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            ></input>
            <label className="rent__label">
              {" "}
              Description - What does your space look like?
            </label>

            <input
              className="rent__field"
              type="text"
              onChange={(event) => {
                setNewDescription(event.target.value);
              }}
            ></input>
            <label className="rent__label"> Number of People</label>

            <input
              className="rent__field"
              type="text"
              onChange={(event) => {
                setNewPeople(event.target.value);
              }}
            ></input>
            <label className="rent__label">Price per Hour</label>

            <input
              className="rent__field"
              type="number"
              onChange={(event) => {
                setNewPrice(event.target.value);
              }}
            ></input>

            <button className="rent__btn">Create Rental</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RentYourSpace;
