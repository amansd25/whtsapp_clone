//import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjUd-WhBMQb3vw2CB6fRB1VEW6Jm2mizc",
    authDomain: "whatsapp-clone-cdf80.firebaseapp.com",
    projectId: "whatsapp-clone-cdf80",
    storageBucket: "whatsapp-clone-cdf80.appspot.com",
    messagingSenderId: "577332897909",
    appId: "1:577332897909:web:1c0b6744197fe7f854303c",
    measurementId: "G-NCBW1R59KB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;