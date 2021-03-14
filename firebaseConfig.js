import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
    apiKey: "AIzaSyCXaohhn_Tac8qLLtT3iCuIMJAorbx-WHg",
    authDomain: "redbull-gaming.firebaseapp.com",
    projectId: "redbull-gaming",
    storageBucket: "redbull-gaming.appspot.com",
    messagingSenderId: "315149292248",
    appId: "1:315149292248:web:d411202c243e589fd1bdad"
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