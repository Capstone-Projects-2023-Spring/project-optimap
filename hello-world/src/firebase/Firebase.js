import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAY21j0lRA5G6W5trfj6QY0_VP6vuw2cUQ",
  authDomain: "reactjs-hello.firebaseapp.com",
  projectId: "reactjs-hello",
  storageBucket: "reactjs-hello.appspot.com",
  messagingSenderId: "896268054393",
  appId: "1:896268054393:web:d915506b6a5eba578b49a8"
 };

 const app = initializeApp(firebaseConfig)
 export const db = getDatabase(app)