import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyA0OWISYwVscOf8nluXLyRv4fsY998sSvQ",
    authDomain: "redbull-gaming-74ca0.firebaseapp.com",
    projectId: "redbull-gaming-74ca0",
    storageBucket: "redbull-gaming-74ca0.appspot.com",
    messagingSenderId: "309270432345",
    appId: "1:309270432345:web:e36f1d877ac3bdf5633f48",
    measurementId: "G-JJXZ7KQR9Y"
};

firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()

// firebase collectionsa
const expCollection = db.collection('experiences')

export {
    firebase,
    db,
    expCollection
}