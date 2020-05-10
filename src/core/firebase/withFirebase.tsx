import React from 'react'
import FirebaseContext from './provider';

export function withFirebase<P> (Component: React.FC<P>) {
  return (props: P) => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
  )
}

export default FirebaseContext;
