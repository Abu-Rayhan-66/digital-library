/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

// eslint-disable-next-line no-unused-vars
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true)

    // eslint-disable-next-line no-unused-vars
    const createUser = (email,password)=>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)
       
        

    }

    const userLogIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }


    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    },[])

     const authInfo = {
        user,
        loading,
        createUser,
        userLogIn,
        googleLogIn,
        logOut,

     }
     
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;