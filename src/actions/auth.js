import {
    GET_CURRENT_SESSION,
    UPDATE_CURRENT_SESSION,
} from './types';

export const getCurrentSession = () => ({ type: GET_CURRENT_SESSION });

export const updateCurrentSession = sessionData => ({ type: UPDATE_CURRENT_SESSION, sessionData });