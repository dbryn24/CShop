import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Tambahkan ini
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz9siEdB_EziF4gBAzItwNhs_gSBrvLHw",
  authDomain: "finalprojectmad-fe63c.firebaseapp.com",
  projectId: "finalprojectmad-fe63c",
  storageBucket: "finalprojectmad-fe63c.firebasestorage.app",
  messagingSenderId: "203302136453",
  appId: "1:203302136453:web:f51e3d9d417f689bb757ec",
  measurementId: "G-JP2K2KG3N4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app); // Tambahkan inisialisasi Firestore

export { app, auth, firestore };