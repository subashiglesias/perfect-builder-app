import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from "./auth-reducer";
import projects from './project'

export const reducers = {
    routing: routerReducer,
    authReducer,
    projects
};

export default combineReducers(reducers);