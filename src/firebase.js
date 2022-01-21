// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxJx4SM8VOc1m-FaLfFKWj4hKc3_9hcXM",
  authDomain: "blogs-2553c.firebaseapp.com",
  projectId: "blogs-2553c",
  storageBucket: "blogs-2553c.appspot.com",
  messagingSenderId: "323354889161",
  appId: "1:323354889161:web:8ac2a7e8a500c6a7ccb618",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
