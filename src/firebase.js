// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC40WaGxPypv9aCtLvCypOa2OWzKxN2Rfw",
  authDomain: "healthmonitoringsystem-8325d.firebaseapp.com",
  projectId: "healthmonitoringsystem-8325d",
  storageBucket: "healthmonitoringsystem-8325d.appspot.com",
  messagingSenderId: "542543643055",
  appId: "1:542543643055:web:d19fb2b5b77f6cdbe5af5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);