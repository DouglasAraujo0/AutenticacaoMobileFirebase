// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfDCbdkd3Q2AObK00p9j90275VnmdzeIQ",
  authDomain: "autenticacao-4860e.firebaseapp.com",
  projectId: "autenticacao-4860e",
  storageBucket: "autenticacao-4860e.appspot.com",
  messagingSenderId: "1097237961935",
  appId: "1:1097237961935:web:7cdb7186b3e4ea0f40ebba",
  measurementId: "G-TXV00HZ7WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);