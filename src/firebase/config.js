import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsAm_IF_bGACdgRwaUW4HmiA_AHFBTVgk",
  authDomain: "to-do-app-ed637.firebaseapp.com",
  projectId: "to-do-app-ed637",
  storageBucket: "to-do-app-ed637.appspot.com",
  messagingSenderId: "488381677178",
  appId: "1:488381677178:web:659e7c24c3d81b1407c5c3",
};

initializeApp(firebaseConfig);
// const db = getFireStore();
const auth = getAuth();
export { auth };
