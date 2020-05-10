import React from 'react';
import firebase from 'firebase';
import firebaseApp from './';
import 'firebase/auth';
import 'firebase/database';
import { createContext } from 'react';


const FirebaseContext = createContext<firebase.app.App>(firebaseApp);

export const FirebaseProvider = (props: React.PropsWithChildren<object>) => {
  return (
    <FirebaseContext.Provider value={firebaseApp}>
      {props.children}
    </FirebaseContext.Provider>
  )
};

export default FirebaseContext;
