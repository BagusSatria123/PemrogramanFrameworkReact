import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT0Jewdviw2G5Ni4faQAiRY5DYDmak5P8",
  authDomain: "login2-a5beb.firebaseapp.com",
  projectId: "login2-a5beb",
  storageBucket: "login2-a5beb.appspot.com",
  messagingSenderId: "191295623080",
  appId: "1:191295623080:web:0c84a677be67d755a2179d"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;