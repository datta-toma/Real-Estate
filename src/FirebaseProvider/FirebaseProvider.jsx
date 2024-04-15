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
    
    const [loading, setLoading] = useState(true);
    console.log(loading)

    // create user
    const createUser = (email, password) =>{
      setLoading(true);
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sin in user
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout = () =>{
        setUser(null)
        signOut(auth) 
    }

    // observable
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            setLoading(false);
          }
          else {
            setUser(null);
            setLoading(false);
          }
           
          });
          return () => unsubscribe();
    },[]);

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
    
    const allValues ={createUser, signInUser, googleLogin, githubLogin, logout, user, userProfile, loading}
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;