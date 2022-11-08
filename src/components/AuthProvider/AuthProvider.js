import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import app from '../../firebase.config';


export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('nayeem');
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut();
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged
    },[])
    const authInfo = { user, register, login,logOut }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;