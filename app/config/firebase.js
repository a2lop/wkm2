import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyC_b1SzLE_FnNDT6mdbIYrWggCbANYsqy0',
  authDomain: 'venderelo.firebaseapp.com',
  projectId: 'venderelo',
  storageBucket: 'venderelo.appspot.com',
  messagingSenderId: '458483417614',
  appId: '1:458483417614:web:baeccbac4d118c37c5f25f',
  measurementId: 'G-C889784M61'
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export default firebase
