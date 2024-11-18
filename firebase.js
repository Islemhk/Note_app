// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr-IbPxfZoQUkwfL3QND0CfPtMI-_yKCI",
  authDomain: "notes-app-9480e.firebaseapp.com",
  projectId: "notes-app-9480e",
  storageBucket: "notes-app-9480e.appspot.com",
  messagingSenderId: "679930797454",
  appId: "1:679930797454:web:66c8db694d07f03f5b98df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
