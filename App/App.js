/**
 *
 * @format
 */
import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from './navigator/Navigator';

import {Provider} from 'react-redux';
import configureStore from './redux/Store';

const store = configureStore;
function App(props) {
  StatusBar.setBackgroundColor(Colors.primery);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
