import React, { FC, useContext, useEffect } from 'react';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Layout from '../layout';
import Wishlist from '../wishlist';
import useFirebaseAuthentication from '../../hooks/use-firebase-auth';
import FirebaseContext, { withFirebase } from '../../core/firebase/withFirebase';
import { Login, SignUp } from '../../pages/auth';

const App: FC = (props) => {
  const app = useContext(FirebaseContext);
  const history = useHistory();
  const location = useLocation();
  const authUser = useFirebaseAuthentication(app);

  useEffect(() => {
    if (!authUser && !location.pathname.includes('/auth/')) {
      history.push('/auth/login');
    }
  }, [authUser, history, location]);

  return (
    <Switch>
      <Route exact path={'/auth/sign-up'} component={SignUp} />
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
