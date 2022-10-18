/**
 *
 * @format
 */
import {Add, Remove} from './types';
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
