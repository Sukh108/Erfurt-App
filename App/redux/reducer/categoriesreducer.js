/**
 *
 * @format
 */

import {act} from 'react-test-renderer';

const initialState = {
  categories: [],
};
export const categoriesreducer = (state = initialState, action) => {
  // const [categories, setCategories] = useState([]);

  switch (action.type) {
    case 'Addfromfirebase':
      return {
        ...state,
        categories: state.categories.concat({
          payload: action.payload,
        }),
      };

    default:
      return state;
  }
};
