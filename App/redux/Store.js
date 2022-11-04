/**
 *
 * @format
 */
import {configureStore} from '@reduxjs/toolkit';
import favReducer from './reducer/reducer';
import rootreducer from './reducer/rootreducer';

export default configureStore({reducer: rootreducer});
