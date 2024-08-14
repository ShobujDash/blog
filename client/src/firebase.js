
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "mern-blog-fd148.firebaseapp.com",
  projectId: "mern-blog-fd148",
  storageBucket: "mern-blog-fd148.appspot.com",
  messagingSenderId: "19969173123",
  appId: "1:19969173123:web:1ec0a601326c622b7c9db6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
