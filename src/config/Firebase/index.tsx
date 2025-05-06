import {initializeApp, getApps} from 'firebase/app';
import {getAuth, initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAz9siEdB_EziF4gBAzItwNhs_gSBrvLHw',
  authDomain: 'finalprojectmad-fe63c.firebaseapp.com',
  projectId: 'finalprojectmad-fe63c',
  storageBucket: 'finalprojectmad-fe63c.appspot.com',
  messagingSenderId: '203302136453',
  appId: '1:203302136453:web:f51e3d9d417f689bb757ec',
  measurementId: 'G-JP2K2KG3N4',
};

// Periksa apakah aplikasi sudah diinisialisasi
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Periksa apakah Auth sudah diinisialisasi
const auth =
  getAuth(app)._isInitialized
    ? getAuth(app)
    : initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
      });

// Inisialisasi Firestore
const firestore = getFirestore(app);

export {app, auth, firestore};