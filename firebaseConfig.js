// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuECTMZfc3ode7iIxXEdz72My3hH_v5jE",
  authDomain: "hodhod-c4aa2.firebaseapp.com",
  databaseURL: "https://hodhod-c4aa2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hodhod-c4aa2",
  storageBucket: "hodhod-c4aa2.firebasestorage.app",
  messagingSenderId: "579573823574",
  appId: "1:579573823574:web:106bd5ebe580f3b0ace3f7",
  measurementId: "G-W5Y9JLE511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);