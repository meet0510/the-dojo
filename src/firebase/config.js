import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9aqgcb1WcaC8Axj8whaLIqCwGc2boM5o",
  authDomain: "thedojosite-65d4d.firebaseapp.com",
  projectId: "thedojosite-65d4d",
  storageBucket: "thedojosite-65d4d.appspot.com",
  messagingSenderId: "389621177044",
  appId: "1:389621177044:web:1d5d1b5ad5e92ddf563941",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
