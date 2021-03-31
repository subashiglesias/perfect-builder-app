import {
    UPDATE_VENDORS
} from '../actions/types';

const initialState = {
    vendorList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_VENDORS: {
            return { ...state, vendorList: action.vendorData };
        }
        default:
            return state;
    }
}