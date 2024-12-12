import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleprovider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleprovider)
    }
    const twitterProvider = new TwitterAuthProvider()
    const signIntWitter = ()=>{
        return signInWithPopup(auth, twitterProvider)
    }
    const githubProvider = new GithubAuthProvider()
    const signInGithub = ()=>{
        return signInWithPopup(auth, githubProvider)
    }

const [user,setUser] = useState()
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
       setUser(currentUser)
       
    })
    return ()=>{
        setLoading(false)
        unsubscribe()

    }
},[])
console.log(loading);

console.log(user);




 const authinfo={
    createUser,
    signInUser,
    user,
    signIntWitter,
    signInWithGoogle,
    signInGithub
    
    
 }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;