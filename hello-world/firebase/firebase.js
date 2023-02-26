import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getDatabase, ref, onValue } from 'firebase/database';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiHxWCHfZa60-Pr-4onYUEQk-lcgmY-eo",
  authDomain: "hello-world-6aeea.firebaseapp.com",
  projectId: "hello-world-6aeea",
  storageBucket: "hello-world-6aeea.appspot.com",
  messagingSenderId: "135110658559",
  appId: "1:135110658559:web:50fb5e30de0a5bdad0bfca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

// export default db

