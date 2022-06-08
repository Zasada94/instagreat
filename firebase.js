// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBLdiMWnM-HFYGcOcrlxzRBCHjltuU95QU",
	authDomain: "rn-instagreat.firebaseapp.com",
	projectId: "rn-instagreat",
	storageBucket: "rn-instagreat.appspot.com",
	messagingSenderId: "221435082837",
	appId: "1:221435082837:web:f5040d62b13c3e4f89bcdc",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
