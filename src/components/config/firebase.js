// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFDtPWtYoKjk2aehHsRYEOcToUIpS90Co",
  authDomain: "ee-unizik-18128.firebaseapp.com",
  projectId: "ee-unizik-18128",
  storageBucket: "ee-unizik-18128.appspot.com",
  messagingSenderId: "534290147352",
  appId: "1:534290147352:web:7fdc6435607356e0a0bb6d",
  measurementId: "G-DQ1GV920TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);