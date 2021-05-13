import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBzPUIt6-02pjgvg5g0NMJH-ot-iD-d41s",
    authDomain: "barbershop-40e17.firebaseapp.com",
    databaseURL: "https://barbershop-40e17.firebaseio.com",
    projectId: "barbershop-40e17",
    storageBucket: "barbershop-40e17.appspot.com",
    messagingSenderId: "812593945671",
    appId: "1:812593945671:web:fcd467ad7346ca212f2562",
    measurementId: "G-WW3SKERT70"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const db = firebase.firestore();

  export default db;