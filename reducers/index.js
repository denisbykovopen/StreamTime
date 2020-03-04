import { combineReducers } from "redux";
import sessionReducer from "./session";
import userReducer from "./user";
import {reducer as formReducer} from 'redux-form';
import ComponentReducer from './ComponentReducer';
import GetProjectsReducer from "./GetProjectsReducer";
import GetImageReducer from './GetImageReducer';
<<<<<<< HEAD
import GetProcessesReducer from "./GetProcessesReducer";
import GetUserDataReducer from "./GetUserDataReducer";
=======
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6

export default combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  form: formReducer,
  component: ComponentReducer,
  projects: GetProjectsReducer,
<<<<<<< HEAD
  image: GetImageReducer,
  processes: GetProcessesReducer,
  userData: GetUserDataReducer,
=======
  image: GetImageReducer
>>>>>>> ef6708b5b32b815daa85f564a5152695991bcfb6
});
