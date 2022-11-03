import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.config';
import { useEffect } from 'react';


export const AuthContex = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)


    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])
    const signInGoogle = () => {
        return signInWithPopup(auth, provider).then(result => { }).catch(error => console.error(error))
    }

    return (
        <AuthContex.Provider value={{ user, signIn, logIn, setUser, logOut, loading, signInGoogle }}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContext;