import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const apikey=import.meta.env.VITE_APIKEY
export const firebaseConfig = {
  apiKey:apikey ,
  authDomain: "ecommerce-64211.firebaseapp.com",
  projectId: "ecommerce-64211",
  storageBucket: "ecommerce-64211.appspot.com",
  messagingSenderId: "934668679524",
  appId: "1:934668679524:web:4d0458a60a5c423e91a271",
  measurementId: "G-J74JQWEEYN",
  databaseURL:"https://ecommerce-64211-default-rtdb.firebaseio.com/"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
