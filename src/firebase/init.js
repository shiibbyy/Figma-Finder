import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDiM1isUhUQWEi8h_d-P_6eF-f3dRAiUSc",
    authDomain: "figmafinder-resources.firebaseapp.com",
    databaseURL: "https://figmafinder-resources.firebaseio.com",
    projectId: "figmafinder-resources",
    storageBucket: "figmafinder-resources.appspot.com",
    messagingSenderId: "1029434877287"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export
export default firebaseApp.firestore()