import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import {} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDgNhy9hVkh1Ys2ZSxj2UiAm8FExjKSssg",
  authDomain: "hackathon-project-a9aef.firebaseapp.com",
  projectId: "hackathon-project-a9aef",
  storageBucket: "hackathon-project-a9aef.appspot.com",
  messagingSenderId: "28242563382",
  appId: "1:28242563382:web:00fa51c7a68fb8057f2397",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
};
