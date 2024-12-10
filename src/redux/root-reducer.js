import { combineReducers } from "redux";
// import userReducer from "./user/reducer";

import userReducer from './user/userSlice'
import cartReducer from './cart/cartSlice'

// root reducer é onde está armazenado todos os reducers, passamos para o combineReducers aqueles reducers que devem ser armazenados.
const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer