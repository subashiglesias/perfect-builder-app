import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from "./auth-reducer";

export const reducers = {
    routing: routerReducer,
    authReducer,
};

export default combineReducers(reducers);