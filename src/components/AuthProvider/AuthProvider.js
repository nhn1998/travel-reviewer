import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged ,updateProfile} from "firebase/auth";
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
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = { user, register, login,logOut,updateUserProfile }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;