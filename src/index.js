import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import App from './App';

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCa1p-hMnvxIVf4IoBqUh_fWV65IzuOK6A",
  authDomain: "chat-react-8ed8b.firebaseapp.com",
  projectId: "chat-react-8ed8b",
  storageBucket: "chat-react-8ed8b.appspot.com",
  messagingSenderId: "106839228582",
  appId: "1:106839228582:web:84126b6c7d7250468d7467",
  measurementId: "G-4L0X752K30" 
});

export const Context = createContext(null);


const auth = getAuth(app);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    auth,
    db
  }}>
     <App />
  </Context.Provider>
);