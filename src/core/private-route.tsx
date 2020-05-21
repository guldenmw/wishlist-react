import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from './firebase';

const PrivateRoute = (props: any) => {
  const { children, ...rest } = props;
  console.log('authenticated: ', firebase.isAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        firebase.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;