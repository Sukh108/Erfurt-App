/**
 *
 * @format
 */
import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from './navigator/Navigator';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import configureStore from './redux/Store';

const store = configureStore;
function App(props) {
  auth()
    .signInAnonymously()
    .then(() => {
      console.log('User signed in anonymously');
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }

      console.error(error);
    });

  StatusBar.setBackgroundColor(Colors.primery);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
