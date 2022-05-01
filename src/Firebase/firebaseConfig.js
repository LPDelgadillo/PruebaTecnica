// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9zwmiwvjBpMk4OHRI577BacJ9PatvaI",
  authDomain: "recetas-d7fee.firebaseapp.com",
  projectId: "recetas-d7fee",
  storageBucket: "recetas-d7fee.appspot.com",
  messagingSenderId: "31876863700",
  appId: "1:31876863700:web:6930341180fcb436b6cd41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const baseDatos = getFirestore();

export { app, google, facebook, baseDatos }