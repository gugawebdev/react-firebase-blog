import firebase from 'firebase'
import 'firebase/database'

const config = {
    //
}

const db = firebase.initializeApp(config)

const database = db.database().ref()

export default database

