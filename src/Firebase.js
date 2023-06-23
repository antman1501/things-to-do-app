// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0RjGYDPjdcjh0ta_y3SKSwKBA0IhWGHs",
  authDomain: "thingstodo-app.firebaseapp.com",
  projectId: "thingstodo-app",
  storageBucket: "thingstodo-app.appspot.com",
  messagingSenderId: "38992403531",
  appId: "1:38992403531:web:a31391cbae32e27ec381ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);