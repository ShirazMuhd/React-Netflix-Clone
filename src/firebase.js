import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8lIrhMJlHVvDiAiDL0bqkyYY8jii7F9g",
  authDomain: "netflix-3b153.firebaseapp.com",
  projectId: "netflix-3b153",
  storageBucket: "netflix-3b153.appspot.com",
  messagingSenderId: "595577569585",
  appId: "1:595577569585:web:425d34c1475eb5bfa3f010",
  measurementId: "G-G7X0QPVWB1",
};

const Firebase = firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();
const auth = firebase.auth();
const Storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, Storage, provider };
