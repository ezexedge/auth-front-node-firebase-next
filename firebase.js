import firebase from 'firebase/app'
import 'firebase/auth'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCBC9rjWh-YodsvmVfXKm8uLZ7iIwis3aY",
    authDomain: "booking-dbdb7.firebaseapp.com",
    projectId: "booking-dbdb7",
    storageBucket: "booking-dbdb7.appspot.com",
    messagingSenderId: "253375112987",
    appId: "1:253375112987:web:e59d2dc1832d9fca9bd5be",
    measurementId: "G-W8GSJVXN6R"
  };


if(!firebase.apps.length){

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

}


export default firebase