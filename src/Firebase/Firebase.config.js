// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDppibWBOYWioGM_8GOiSJ1KGe2RSFEjWg",
  authDomain: "assignment-10-2b558.firebaseapp.com",
  projectId: "assignment-10-2b558",
  storageBucket: "assignment-10-2b558.appspot.com",
  messagingSenderId: "570048454759",
  appId: "1:570048454759:web:fbeb8a7d2c6a8c3cc0f4c2",
  measurementId: "G-DHEZ181WMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;