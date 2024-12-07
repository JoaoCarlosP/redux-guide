import { combineReducers } from "redux";
import userReducer from "./user/reducer";

// root reducer é onde está armazenado todos os reducers, passamos para o combineReducers aqueles reducers que devem ser armazenados.
const rootReducer = combineReducers({ userReducer })

export default rootReducer