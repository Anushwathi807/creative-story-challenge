// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLlfS1cHy-K57OBzAU6fS1X2j_EMMR-7U",
  authDomain: "picture-description-08.firebaseapp.com",
  projectId: "picture-description-08",
  storageBucket: "picture-description-08.firebasestorage.app",
  messagingSenderId: "589987643234",
  appId: "1:589987643234:web:39c142a00180726e8f363b",
  measurementId: "G-83BYY20R1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }; 