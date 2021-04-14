import firebase from './firebaseConfig';
import 'firebase/firestore';

const DB = firebase.firestore();
import { auth } from './firebaseConfig';

export const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
}


