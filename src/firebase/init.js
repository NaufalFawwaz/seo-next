import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQMlspOSDz3X5BXp8QbP3XRcLay1VAyB4",
  authDomain: "gamecorner-f25d5.firebaseapp.com",
  projectId: "gamecorner-f25d5",
  storageBucket: "gamecorner-f25d5.firebasestorage.app",
  messagingSenderId: "776141605140",
  appId: "1:776141605140:web:aacb4b59491b826da75a01"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };