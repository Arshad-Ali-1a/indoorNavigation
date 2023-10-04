// Import the functions you need from the SDKs you need

// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";

// import {
//   getDatabase,
//   ref,
//   get,
//   child,
//   onValue,
//   set,
//   push,
//   onChildAdded,
//   update,
// } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqSkyBRgd91IxVAWV4m5vGeQPqADHDVMM",
  authDomain: "userauthentication-b8e15.firebaseapp.com",
  projectId: "userauthentication-b8e15",
  storageBucket: "userauthentication-b8e15.appspot.com",
  messagingSenderId: "992651229850",
  appId: "1:992651229850:web:9b9b59abddfb0d4d0e7d23",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) app = firebase.initializeApp(firebaseConfig);
else app = firebase.app();

// const auth = firebase.auth();
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// const db = getDatabase(
//   app,
//   "https://userauthentication-b8e15-default-rtdb.asia-southeast1.firebasedatabase.app"
// );

// const current_user = "user1"; // auth.currentUser.uid
// const db_ref = ref(db, `Todos/allTodos/${current_user}`);

export { auth };
