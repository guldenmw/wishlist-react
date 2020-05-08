import React, { FC } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Layout from '../components/layout';
import Wishlist from '../components/wishlist';


const App: FC = (props) => {
  return (
    <Layout test={'test'} {...props}>
      <Switch>
        <Route exact path={'/'}>
          <Wishlist items={['test']}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
