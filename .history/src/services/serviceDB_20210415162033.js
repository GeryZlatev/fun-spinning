import firebase from './firebaseConfig';
import 'firebase/firestore';
import { auth } from './firebaseConfig';

const DB = firebase.firestore();


export const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
}

export const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
}


