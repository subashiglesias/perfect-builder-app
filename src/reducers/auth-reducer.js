import {
    UPDATE_CURRENT_SESSION
} from '../actions/types';

const initialState = {
    currentSession: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_SESSION: {
            return { ...state, currentSession: action.sessionData && action.sessionData.accessToken.payload };
        }
        default:
            return state;
    }
}