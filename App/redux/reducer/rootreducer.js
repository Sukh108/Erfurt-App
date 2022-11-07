import {combineReducers} from 'redux';
import favReducer from './reducer';
import {categoriesreducer} from './categoriesreducer';
import businessReducer from './businessReducer';
import InfoReducer from './informationreducer';
import reviewReducer from './reviewReducer';
const rootreducer = combineReducers({
  favReducer,
  categoriesreducer,
  businessReducer,
  InfoReducer,
  reviewReducer,
});
export default rootreducer;
