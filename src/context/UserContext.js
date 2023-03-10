import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebse.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userLoginWithemail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userSignOut = () => {
    return signOut(auth);
  }

  const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      subscribe();
    }
  }, [])

  const authInfo = { createUser, user, userLoginWithemail, userSignOut, resetPassword, auth, loading }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;