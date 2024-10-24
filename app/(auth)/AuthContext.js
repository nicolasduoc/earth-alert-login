// app/auth/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from '@firebase/app';
import { initializeAuth, getReactNativePersistence, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBpUNA8HUj7a0aJ7Jy6TeSqzzioMVvYqPo",
  authDomain: "fir-earthalert.firebaseapp.com",
  projectId: "fir-earthalert",
  storageBucket: "fir-earthalert.appspot.com",
  messagingSenderId: "677773421638",
  appId: "1:677773421638:web:eb25e348d21dcca62a2e47",
  measurementId: "G-7HV6W56H5R"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async (email, password, isLogin) => {
    try {
      if (user) {
        await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};