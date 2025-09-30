import { legacy_createStore, applyMiddleware } from "redux";
import nameReducer from "../reducers/nameReducer";
import logger from "redux-logger";

var myStore = legacy_createStore(nameReducer, applyMiddleware(logger));

export default myStore;
