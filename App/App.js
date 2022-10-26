/**
 *
 * @format
 */
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import Navigator from './navigator/Navigator';

function App(props) {
  StatusBar.setBackgroundColor(Colors.primery);
  return <Navigator />;
}

export default App;
