// Firebase initialization using compat version
// This file uses the compat version which is more compatible with various browsers

// Initialize Firebase with your configuration
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the firestore service
const db = firebase.firestore();

// Make db available globally
window.db = db; 