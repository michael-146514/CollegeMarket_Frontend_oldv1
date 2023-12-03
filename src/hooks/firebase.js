// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFH0wD4j-3fKWUBNRBRgsxahX6SIS7gTY",
  authDomain: "collegemarket-222eb.firebaseapp.com",
  projectId: "collegemarket-222eb",
  storageBucket: "collegemarket-222eb.appspot.com",
  messagingSenderId: "401044916083",
  appId: "1:401044916083:web:8523ea9e8becf880d96706",
  measurementId: "G-0CPLDF0KX0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("Logged in!");
  } else {
    console.log("No user");
  }
});

export { auth, firebaseApp };
