import {AddInfo} from '../actions/types';

/**
 *
 * @format
 */
const initialState = {
  info: [],
};
export default InfoReducer = (state = initialState, action) => {
  // const [categories, setCategories] = useState([]);
  switch (action.type) {
    case AddInfo:
      return {
        ...state,
        info: state.info.concat({
          payload: action.payload,
        }),
      };

    default:
      return state;
  }
};
