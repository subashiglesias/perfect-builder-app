import {
    UPDATE_ITEMS,
} from '../actions/types';

const initialState = {
    itemList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_ITEMS: {
            return { ...state, itemList: action.itemData };
        }
        default:
            return state;
    }
}