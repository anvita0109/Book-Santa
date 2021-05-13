import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCke50_8oS73N2HlyGwbCaCynCvHHuD6mE",
    authDomain: "book-santa-1758a.firebaseapp.com",
    projectId: "book-santa-1758a",
    storageBucket: "book-santa-1758a.appspot.com",
    messagingSenderId: "489232158470",
    appId: "1:489232158470:web:914c53dcb1a24cba969887"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()