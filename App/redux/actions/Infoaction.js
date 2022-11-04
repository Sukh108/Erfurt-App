/**
 *
 *  @format
 */
import {AddInfo} from './types';

import {firebase} from '@react-native-firebase/database';
export const getinfofromfirebase = data => {
  return async dispatch => {
    firebase
      .app()
      .database()
      .ref('/info')
      .once('value', snapshot => {
        dispatch({type: AddInfo, payload: snapshot.val()});
      });
  };
};
