import {AddBusiness} from '../actions/types';

/**
 *
 * @format
 */
const initialState = {
  business: [],
};
export default businessReducer = (state = initialState, action) => {
  // const [categories, setCategories] = useState([]);

  switch (action.type) {
    case 'AddBusiness':
      return {
        ...state,
        business: state.business.concat({
          payload: action.payload,
        }),
      };

    default:
      return state;
  }
};
