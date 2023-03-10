// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU2GKG59EFdnIJ2ETTbX19Lur80sD2qlM",
  authDomain: "auth-context-recap.firebaseapp.com",
  projectId: "auth-context-recap",
  storageBucket: "auth-context-recap.appspot.com",
  messagingSenderId: "1074511689128",
  appId: "1:1074511689128:web:af8102fe5f07b2b37a999d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;