import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from "./auth-reducer";
import projects from './project'
import contractors from './contractor';
import pageLoading from './page-loading-reducer';
import items from './item';
import vendors from './vendor';

export const reducers = {
    routing: routerReducer,
    authReducer,
    projects,
    contractors,
    items,
    vendors,
    pageLoading
};

export default combineReducers(reducers);