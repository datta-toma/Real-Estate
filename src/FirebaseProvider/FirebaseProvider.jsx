import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from '../Firebase/firebase.config';
import { useEffect } from "react";

 export const AuthContext = createContext(null);

//  social auth provider
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null)
   console.log(user)

    // create user
    const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sin in user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // observable
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user)
            } 
          });
    },[])

    const allValues ={createUser, signInUser, googleLogin, githubLogin }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;