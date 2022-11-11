/**
 *
 * @format
 */
import {
  Add,
  Remove,
  Addfromfirebase,
  AddBusiness,
  AddInfo,
  AddReview,
} from './types';
import database from '@react-native-firebase/database';
import {useState} from 'react';
export const addToFavorite = data => {
  return async dispatch => {
    dispatch({type: Add, payload: data});
  };
};
export const removeToFavorite = data => {
  return async dispatch => {
    dispatch({type: Remove, payload: data});
  };
};
export const getfromfirebase = data => {
  return async dispatch => {
    const reference = database().ref('/categories');
    reference.on('value', snapshot => {
      dispatch({type: Addfromfirebase, payload: snapshot.val()});
    });
  };
};
export const getbusinessfromfirebase = data => {
  return async dispatch => {
    const reference = database().ref('/businesses');
    reference.once('value', snapshot => {
      dispatch({type: AddBusiness, payload: snapshot.val()});
    });
  };
};
