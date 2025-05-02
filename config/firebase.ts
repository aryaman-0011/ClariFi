// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7wtCmcX5aAAR_LEVNZlprliNL3cUDhiw",
    authDomain: "opula-7d0cc.firebaseapp.com",
    projectId: "opula-7d0cc",
    storageBucket: "opula-7d0cc.firebasestorage.app",
    messagingSenderId: "831662621219",
    appId: "1:831662621219:web:0382d2ccd833f03465e796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

// db
export const firestore = getFirestore(app)