import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from "./auth-reducer";
import projects from './project'
import contractors from './contractor';
import pageLoading from './page-loading-reducer';

export const reducers = {
    routing: routerReducer,
    authReducer,
    projects,
    contractors,
    pageLoading
};

export default combineReducers(reducers);