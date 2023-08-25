import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const FirebaseContext = createContext(null);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn_ovJ4BzdQiFZTOpWe-mlYcZ6Ax8iHf4",
  authDomain: "bookify-847fc.firebaseapp.com",
  projectId: "bookify-847fc",
  storageBucket: "bookify-847fc.appspot.com",
  messagingSenderId: "706989647053",
  appId: "1:706989647053:web:f1ee6cbec0555e34783584"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const useFirebase  = ()=> useContext(FirebaseContext);
const firebaseAuth=getAuth(firebaseApp);
const googleProvider =new GoogleAuthProvider();

export const FirebaseProvider =(props) =>{
    const signupUserWithEmailAndPassword =(email,password) => createUserWithEmailAndPassword(firebaseAuth,email,password);

    const signinUserWithEmailAndPassword = (email,password) => signInWithEmailAndPassword(firebaseAuth,email,password);

    const signinwithGoogle=() =>signInWithPopup(firebaseAuth,googleProvider);

    return(
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPassword,signinwithGoogle}}>
        {props.children}
    </FirebaseContext.Provider>
    );
}