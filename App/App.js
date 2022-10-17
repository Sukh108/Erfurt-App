/**
 * 
 * @format
 */
import React,{useEffect} from 'react';
import { StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash'

import Navigator from './navigator/Navigator';


function App(props) {
  useEffect(()=>{
    RNBootSplash.hide(); 
  })
  StatusBar.setBackgroundColor(Colors.primery);
  return (
    <Navigator/>
  );
}


export default App;