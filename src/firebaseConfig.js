import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdWBwgbJP1Rd4CXikXLbT9tVPDGMskznk",
  authDomain: "backend-facu1.firebaseapp.com",
  projectId: "backend-facu1",
  storageBucket: "backend-facu1.firebasestorage.app",
  messagingSenderId: "431801097582",
  appId: "1:431801097582:web:1282e0c2373f8d3e18757f"
};

const app = initializeApp(firebaseConfig);  

//db = dataBase
export const db = getFirestore(app)