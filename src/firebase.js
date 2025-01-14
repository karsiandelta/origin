// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDbp_3gG-8eGieBhutAObgSOWDx2d1ikyw",
  authDomain: "karsiandelta.firebaseapp.com",
  databaseURL: "https://karsiandelta-default-rtdb.firebaseio.com",
  projectId: "karsiandelta",
  storageBucket: "karsiandelta.firebasestorage.app",
  messagingSenderId: "159073624103",
  appId: "1:159073624103:web:510847e6088b7c5d9a6e02",
  measurementId: "G-5MM7N509VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);