import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import combainReducers from "./reducers";
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  colors: false
});

const middlewares = [ReduxThunk, logger];

const store = createStore(
  combainReducers,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;