import {
    UPDATE_CUSTOMERS,
} from '../actions/types';

const initialState = {
    customerList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CUSTOMERS: {
            return { ...state, customerList: action.customerData };
        }
        default:
            return state;
    }
}