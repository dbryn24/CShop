import {initializeApp, getApps} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAz9siEdB_EziF4gBAzItwNhs_gSBrvLHw',
  authDomain: 'finalprojectmad-fe63c.firebaseapp.com',
  databaseURL: 'https://finalprojectmad-fe63c-default-rtdb.firebaseio.com',
  projectId: 'finalprojectmad-fe63c',
  storageBucket: 'finalprojectmad-fe63c.appspot.com',
  messagingSenderId: '203302136453',
  appId: '1:203302136453:web:f51e3d9d417f689bb757ec',
  measurementId: 'G-JP2K2KG3N4',
};

// Periksa apakah aplikasi sudah diinisialisasi
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Inisialisasi Auth dan Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export {app, auth, firestore};