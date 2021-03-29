import {
    UPDATE_CONTRACTORS
} from '../actions/types';

const initialState = {
    contractorList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CONTRACTORS: {
            return { ...state, contractorList: action.contractData };
        }
        default:
            return state;
    }
}