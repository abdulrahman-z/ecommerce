import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "./reducers/mainReducer";
import { logger } from "redux-logger";

const middlewares = [logger];
const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  mainReducer,

  compose(applyMiddleware(...middlewares), reduxDevtools)
);

export default store;
