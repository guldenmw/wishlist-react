import React, { FC, useContext, useEffect } from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Layout from '../layout';
import Wishlist from '../wishlist';
import useFirebaseAuthentication from '../../hooks/use-firebase-auth';
import FirebaseContext, { withFirebase } from '../../core/firebase/withFirebase';
import Login from '../../pages/auth/login';

const App: FC = (props) => {
  const app = useContext(FirebaseContext);
  const history = useHistory();
  const authUser = useFirebaseAuthentication(app);

  useEffect(() => {
    if (!authUser) {
      history.push('/auth/login');
    }
  }, [authUser, history]);

  return (
    <Switch>
      <Route exact path={'/auth/login'} component={Login} />
      <Layout test={'test'} {...props}>
          <Route exact path={'/'}>
            <Wishlist id={1}/>
          </Route>
      </Layout>
    </Switch>
  );
}

export default withFirebase(App);
