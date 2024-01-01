// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnlgMu0FLQtTU1l7p5DwvHqIpfZnyNChs",
  authDomain: "karyawan-ai.firebaseapp.com",
  projectId: "karyawan-ai",
  storageBucket: "karyawan-ai.appspot.com",
  messagingSenderId: "113837051532",
  appId: "1:113837051532:web:4349ba4a000472abccb5a9",
  measurementId: "G-5B9D224KLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);