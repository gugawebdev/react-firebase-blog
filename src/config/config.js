import firebase from 'firebase'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAMw4RVHcb0GavhpUarFOvz3WOU62R9M5k",
    authDomain: "blog-redux-2380e.firebaseapp.com",
    databaseURL: "https://blog-redux-2380e.firebaseio.com",
    projectId: "blog-redux-2380e",
    storageBucket: "blog-redux-2380e.appspot.com",
    messagingSenderId: "323086049462"
//
}

const db = firebase.initializeApp(config)

const database = db.database().ref()

export default database

