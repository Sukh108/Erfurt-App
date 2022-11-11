/**
 *
 * @format
 */

const initialState = {
  favoritedata: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        favoritedata: state.favoritedata.concat({
          payload: action.payload,
        }),
      };
    case 'Remove':
      console.log('data', action.payload);
      return {
        ...state,
        favoritedata: state.favoritedata.filter(item => {
          console.log(item.payload);
          return item.payload != action.payload;
        }),
      };

    default:
      return state;
  }
};

export default favReducer;
