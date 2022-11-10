import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged ,updateProfile,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';


export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoading(false)
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = { user, register, login,logOut,updateUserProfile,googleLogin,loading,setLoading }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;