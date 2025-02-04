// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnWG9CMteVPODbV42Si_GhpbQOS05LrnE",
  authDomain: "real-time-chatting-appli-36664.firebaseapp.com",
  projectId: "real-time-chatting-appli-36664",
  storageBucket: "real-time-chatting-appli-36664.firebasestorage.app",
  messagingSenderId: "185544333415",
  appId: "1:185544333415:web:8a6e57e84c2051fa085cc2",
  measurementId: "G-3JWN622QF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig