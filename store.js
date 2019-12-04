import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import combainReducers from "./reducers";
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
// import {createNodeLogger} from 'redux-node-logger';

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  colors: false
});
// const createNodeLogger = require('redux-node-logger');
// const nodeLogger = createNodeLogger({
//   downArrow: '▼',
//   rightArrow: '▶',
//   messageColor: 'bright-yellow',
//   prevColor: 'grey',
//   actionColor: 'bright-blue',
//   nextColor: 'green',
//   predicate: ''
// });
const middlewares = [ReduxThunk, logger,createNodeLogger];

const store = createStore(
  combainReducers,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;