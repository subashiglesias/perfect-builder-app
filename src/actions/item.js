import {
    CREATE_UPDATE_ITEMS,
    DELETE_ITEM,
    GET_ITEMS,
    UPDATE_ITEMS,
} from './types';

export const getItems = body => ({ type: GET_ITEMS, body });

export const updateItemData = itemData => ({ type: UPDATE_ITEMS, itemData });

export const createOrUpdateItemData = body => ({type: CREATE_UPDATE_ITEMS, body})

export const deleteItemData = body => ({type: DELETE_ITEM, body})