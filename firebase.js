// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import * as dotenv from dotenv
dotenv.config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nyush-rmp.firebaseapp.com",
  projectId: "nyush-rmp",
  storageBucket: "nyush-rmp.appspot.com",
  messagingSenderId: "1032120759999",
  appId: "1:1032120759999:web:17bb054cef726d0c67f80a",
  measurementId: "G-LZ79Y9Q25G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}