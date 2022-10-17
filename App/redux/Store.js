
/**
 *
 * @format
 */
import { configureStore} from "@reduxjs/toolkit";
import favReducer from "./reducer/reducer";


export default configureStore({reducer:favReducer})