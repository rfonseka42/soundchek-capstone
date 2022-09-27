import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // apiKey: "AIzaSyCjFwfSsg3d_dN6YTNf7efX34xV339905I",
  // authDomain: "soundchek-capstone.firebaseapp.com",
  // projectId: "soundchek-capstone",
  // storageBucket: "soundchek-capstone.appspot.com",
  // messagingSenderId: "290274258675",
  // appId: "1:290274258675:web:af0da0d022d74d4e555186",
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// export default app;
