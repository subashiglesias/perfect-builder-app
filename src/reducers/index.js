import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from "./auth-reducer";
import projects from './project'
import contractors from './contractor';
import pageLoading from './page-loading-reducer';
import items from './item';
import vendors from './vendor';
import customers from './customer';

export const reducers = {
    routing: routerReducer,
    authReducer,
    projects,
    contractors,
    items,
    vendors,
    customers,
    pageLoading
};

export default combineReducers(reducers);