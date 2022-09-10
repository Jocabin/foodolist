import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7LiocPhGyuJDrlYdeCNd1uE1-rz5c7kM",
  authDomain: "foodolist-b7c34.firebaseapp.com",
  projectId: "foodolist-b7c34",
  storageBucket: "foodolist-b7c34.appspot.com",
  messagingSenderId: "1034007400859",
  appId: "1:1034007400859:web:68ec80602ada7558f5913e",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
