import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-14a46.firebaseapp.com",
  projectId: "mern-estate-14a46",
  storageBucket: "mern-estate-14a46.appspot.com",
  messagingSenderId: "285406944352",
  appId: "1:285406944352:web:9e4f60817a1f15ce8bb705"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);