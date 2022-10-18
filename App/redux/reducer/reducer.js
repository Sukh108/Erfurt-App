/**
 *
 * @format
 */
import {Add, Remove} from '../actions/Action';

const initialState = {
  favoritedata: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add':
      console.log(action.payload);
      return {
        ...state,
        favoritedata: state.favoritedata.concat({
          payload: action.payload,
        }),
      };
    case 'Remove':
      return {
        ...state,
        favoritedata: state.favoritedata.filter(item => {
          item.payload != action.payload;
        }),
      };

    default:
      return state;
  }
};

export default favReducer;

// switch (action.type) {
//   case Add:
//     console.log('da');
//     return {
//       ...state,
//       favoritedata: state.favoritedata.concat({
//         payload: action.payload,
//       }),
//     };
//   case Remove:
//     return {
//       ...state,
//       favoritedata: state.favoritedata.filter(item => {
//         item.payload != action.payload;
//       }),
//     };
//   default:
//     return state;
// }
