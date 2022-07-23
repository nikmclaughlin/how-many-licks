import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import config from '../_firebase-secrets';

firebase.initializeApp(config);
  
const firestore = firebase.firestore();

export default firestore;