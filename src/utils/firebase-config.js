import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEe8CNExBjJQj0RMZJ88S3UXm7v7x3jV8",
  authDomain: "netflix-clone1-eba99.firebaseapp.com",
  projectId: "netflix-clone1-eba99",
  storageBucket: "netflix-clone1-eba99.appspot.com",
  messagingSenderId: "388304019680",
  appId: "1:388304019680:web:4b9e34f813b5d80d9bf085",
  measurementId: "G-R7097R8MZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
