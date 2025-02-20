import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAu2j831MC-a7nh7PQeEUM0xfypoBfGdAg",
  authDomain: "baeun-sns-420604.firebaseapp.com",
  projectId: "baeun-sns-420604",
  storageBucket: "baeun-sns-420604.appspot.com",
  messagingSenderId: "527863136270",
  appId: "1:527863136270:web:f454fd8810e32456033c5f",
  measurementId: "G-DX87C6GY4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "wedding");

export { db };
