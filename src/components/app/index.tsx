import React, { FC, useEffect, useState } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Layout from '../layout';
import Wishlist from '../wishlist';
import { Login, SignUp } from '../../pages/auth';
import PrivateRoute from '../../core/private-route';
import firebase from '../../core/firebase';
import { CircularProgress } from '@material-ui/core';

const App: FC = () => {
  const [firebaseInit, setFirebaseInit] = useState<boolean>(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInit(!!val)
    })
  })


  return firebaseInit ? (
    <Switch>
      <Route exact path={'/sign-up'} component={SignUp} />
      <Route exact path={'/login'} component={Login} />
      <PrivateRoute path={'/'}>
        <Layout test={'test'}>
          <Wishlist id={1}/>
        </Layout>
      </PrivateRoute>
    </Switch>
  ) : (
    <div id="loader"><CircularProgress /></div>
  );
}

export default App;
