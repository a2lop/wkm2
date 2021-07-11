import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: 'AIzaSyCTi-vxAiQSmrur0m2i4aNt03nnv1Eo_qw',
    authDomain: 'whatkomv2.firebaseapp.com',
    databaseURL: 'https://whatkomv2.firebaseio.com',
    projectId: 'whatkomv2',
    storageBucket: 'whatkomv2.appspot.com',
    messagingSenderId: '76200439889',
    appId: '1:76200439889:web:3cfd82341d26f97ad20870'
}
try {
    firebase.initializeApp(firebaseConfig)
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
// const fire = firebase
export default firebase
