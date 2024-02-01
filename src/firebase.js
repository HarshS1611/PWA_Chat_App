import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjRb4GgIHGrbvPYFnblo1N_OvRsDgpM2A" ,
  authDomain: "chat-app-1ed09.firebaseapp.com",
  projectId: "chat-app-1ed09",
  storageBucket: "chat-app-1ed09.appspot.com",
  messagingSenderId: "487620776425",
  appId: "1:487620776425:web:b2489e3de63cd7270fbb78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
