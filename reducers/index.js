import { combineReducers } from "redux";
import sessionReducer from "./session";
import userReducer from "./user";
import {reducer as formReducer} from 'redux-form';
import ComponentReducer from './ComponentReducer';
import GetProjectsReducer from "./GetProjectsReducer";
import GetImageReducer from './GetImageReducer';
import GetProcessesReducer from "./GetProcessesReducer";
import GetUserDataReducer from "./GetUserDataReducer";

export default combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  form: formReducer,
  component: ComponentReducer,
  projects: GetProjectsReducer,
  image: GetImageReducer,
  processes: GetProcessesReducer,
  userData: GetUserDataReducer,
});
