// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJWB58XopqeerL7zFMeQgq7OR_CfMQOJo",
  authDomain: "codex-6acf0.firebaseapp.com",
  projectId: "codex-6acf0",
  storageBucket: "codex-6acf0.appspot.com",
  messagingSenderId: "801517706646",
  appId: "1:801517706646:web:1a239511857b0e1f27d1b7",
  measurementId: "G-Q5Y7YVE9HM",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
