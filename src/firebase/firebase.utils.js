import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHyeFZegoGQi0Qd2j5CG9dMfDFWr_z4jI",
  authDomain: "crwn-db-rafa.firebaseapp.com",
  databaseURL: "https://crwn-db-rafa.firebaseio.com",
  projectId: "crwn-db-rafa",
  storageBucket: "crwn-db-rafa.appspot.com",
  messagingSenderId: "1054497146495",
  appId: "1:1054497146495:web:4121b8878fc6366991614a",
  measurementId: "G-FMKECE47T3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
