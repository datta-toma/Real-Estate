import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    // logout
    const logout = () =>{
        setUser(null)
        signOut(auth) 
    }

    // observable
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user)
            } 
          });
    },[])

    // update profile
    const userProfile = async (email, photoURL) =>{
        
        updateProfile(auth.currentUser, {
            email, photoURL
          });

          setUser({
            ...user, email, photoURL
          });
          console.log('profile update successfully');
        
    }
    
    const allValues ={createUser, signInUser, googleLogin, githubLogin, logout, user, userProfile }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;