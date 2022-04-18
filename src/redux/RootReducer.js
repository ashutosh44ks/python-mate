import suReducer from "./SignUp/suReducer";
import siReducer from "./SignIn/siReducer";

import { combineReducers } from "redux";

const RootReducer = combineReducers({
  su: suReducer,
  si: siReducer,
});
export default RootReducer;
