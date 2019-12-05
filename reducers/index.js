import { combineReducers } from "redux";
import sessionReducer from "./session";
import userReducer from "./user";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  form: formReducer
});
