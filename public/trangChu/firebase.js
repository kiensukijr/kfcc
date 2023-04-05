// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtYnwDCVL52MapOQiLegQXS-yxCWKvBS0",
  authDomain: "kfcc-46181.firebaseapp.com",
  projectId: "kfcc-46181",
  storageBucket: "kfcc-46181.appspot.com",
  messagingSenderId: "200287826197",
  appId: "1:200287826197:web:541b141cb48569eefdb91c",
  measurementId: "G-ZCBD3Q57EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);