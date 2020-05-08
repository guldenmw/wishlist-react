import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase/app';
import App from './core/App';
import { Provider, themes } from '@fluentui/react-northstar'
import { BrowserRouter } from 'react-router-dom';


const firebaseConfig = {
  apiKey: 'AIzaSyDQI8BBnXotgciNZ-tvzKfUKAGVG19mLFk',
  authDomain: 'wishlist-cc7c7.firebaseapp.com',
  databaseURL: 'https://wishlist-cc7c7.firebaseio.com',
  projectId: 'wishlist-cc7c7',
  storageBucket: 'wishlist-cc7c7.appspot.com',
  messagingSenderId: '632433740720',
  appId: '1:632433740720:web:15fbb41be9938ff6b36475',
  measurementId: 'G-T803HB078L',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={themes.teams}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
