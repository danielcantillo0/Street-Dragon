import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASpQ5D1-lSbqmBhoprKgzQNbgW-If7Mvw",
    authDomain: "dragondecalle-db.firebaseapp.com",
    databaseURL: "https://dragondecalle-db.firebaseio.com",
    projectId: "dragondecalle-db",
    storageBucket: "dragondecalle-db.appspot.com",
    messagingSenderId: "883938573592",
    appId: "1:883938573592:web:c3427d2776047cd36c726d",
    measurementId: "G-XDG6Y6YC16"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
       const {displayName, email} = userAuth;
       const createdAt = new Date();

       try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       } catch (error) {
           console.log('Error creating user', error.message);
       }       
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
