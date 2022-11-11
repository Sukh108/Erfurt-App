import {combineReducers} from 'redux';
import favReducer from './reducer';
import {categoriesreducer} from './categoriesreducer';
import businessReducer from './businessReducer';
import InfoReducer from './informationreducer';

const rootreducer = combineReducers({
  favReducer,
  categoriesreducer,
  businessReducer,
  InfoReducer,
});
export default rootreducer;
