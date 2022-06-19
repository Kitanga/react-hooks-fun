import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCS5jhd3mPsejZCPmili2pfpgDftvFvxcM",
    authDomain: "swiipr-kephas.firebaseapp.com",
    databaseURL: "https://swiipr-kephas-default-rtdb.firebaseio.com",
    projectId: "swiipr-kephas",
    storageBucket: "swiipr-kephas.appspot.com",
    messagingSenderId: "264526551623",
    appId: "1:264526551623:web:dc17b68afd58d266d8af62",
    measurementId: "G-29QGYL7QFP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, "[DEFAULT]");
export const db = getDatabase();