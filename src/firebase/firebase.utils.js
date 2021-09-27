import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_e-aHfPn4B_VKa6aWwkxXlV9C4QKCoPg",
  authDomain: "ecommerce-19398.firebaseapp.com",
  projectId: "ecommerce-19398",
  storageBucket: "ecommerce-19398.appspot.com",
  messagingSenderId: "1070188879215",
  appId: "1:1070188879215:web:657841b140d85223a29c9a",
  measurementId: "G-C7DZ2N58EQ",
};

export const createUserProfileDocument = async (userAuth, info) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...info,
      });
    } catch (err) {
      console.log("error occurred!", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
