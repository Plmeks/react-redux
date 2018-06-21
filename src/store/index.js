import { combineReducers, createStore } from "redux";

import AppReducer from "../reducers/app";

const rootReducer = combineReducers({
    AppReducer
});

export default createStore(rootReducer);