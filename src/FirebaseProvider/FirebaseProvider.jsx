import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import auth from '../Firebase/firebase.config';
import { useEffect } from "react";

 export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null)
   

    // create user
    const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sin in user

    // observable
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user)
            } 
          });
    },[])

    const allValues ={createUser }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;