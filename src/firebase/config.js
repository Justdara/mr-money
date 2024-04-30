import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKpxJsKDMFJ8oAvCN9kHbdGt3xmBEtviM",
  authDomain: "mrmoney-6d0db.firebaseapp.com",
  projectId: "mrmoney-6d0db",
  storageBucket: "mrmoney-6d0db.appspot.com",
  messagingSenderId: "679171873343",
  appId: "1:679171873343:web:362abdcc09a7d33433f68a",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
