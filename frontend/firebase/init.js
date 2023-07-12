// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY29Uu746y-M37z98jc6IxvywB3fcOMyY",
  authDomain: "canicode-d8506.firebaseapp.com",
  projectId: "canicode-d8506",
  storageBucket: "canicode-d8506.appspot.com",
  messagingSenderId: "147737274725",
  appId: "1:147737274725:web:a0562470be34573e09d98c",
  measurementId: "G-VFGNMNE4JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);