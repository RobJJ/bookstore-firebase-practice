// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHARikn14WPzbQU8HvcE4DYc36KSSYxqE",
  authDomain: "bookstore-crud-app.firebaseapp.com",
  projectId: "bookstore-crud-app",
  storageBucket: "bookstore-crud-app.appspot.com",
  messagingSenderId: "995583954061",
  appId: "1:995583954061:web:170d2f315a50b91a8d26c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
export const db = getFirestore(app);
