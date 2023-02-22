// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiHxWCHfZa60-Pr-4onYUEQk-lcgmY-eo",
  authDomain: "hello-world-6aeea.firebaseapp.com",
  projectId: "hello-world-6aeea",
  storageBucket: "hello-world-6aeea.appspot.com",
  messagingSenderId: "135110658559",
  appId: "1:135110658559:web:50fb5e30de0a5bdad0bfca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default firebase;