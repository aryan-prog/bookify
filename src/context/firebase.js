import { createContext, useContext,useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup,onAuthStateChanged } from "firebase/auth";
import {getFirestore,collection,addDoc} from "firebase/firestore";
import {getStorage,ref,uploadBytes} from "firebase/storage";

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
const firestore=getFirestore(firebaseApp);
const storage=getStorage(firebaseApp);
const googleProvider =new GoogleAuthProvider();

export const FirebaseProvider =(props) =>{
    const [user,setUser] =useState("");

    useEffect(() =>{
        onAuthStateChanged(firebaseAuth,(user)=> {
            if(user)
            setUser(user);
            else
            setUser(null);
        })
    },[])
    const signupUserWithEmailAndPassword =(email,password) => createUserWithEmailAndPassword(firebaseAuth,email,password);

    const signinUserWithEmailAndPassword = (email,password) => signInWithEmailAndPassword(firebaseAuth,email,password);

    const signinwithGoogle=() =>signInWithPopup(firebaseAuth,googleProvider);

    const isLoggedIn = user ? true : false;

    const handleCreateNewListing =async(name,isbn,cover,price) =>{
        const imageRef = ref(storage, 'uploads/images/${Date.now()}-${cover.name}');
        const uploadResult = await uploadBytes(imageRef,cover);
        return await addDoc(collection(firestore,'books'),{
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID:user.uid,
            userEmail:user.email,
            userName: user.displayName,
            photoURL: user.photoURL
        })
    };

    return(
    <FirebaseContext.Provider 
    value={{signupUserWithEmailAndPassword,
    signinUserWithEmailAndPassword,
    signinwithGoogle,handleCreateNewListing , isLoggedIn}}>
        {props.children}
    </FirebaseContext.Provider>
    );
}