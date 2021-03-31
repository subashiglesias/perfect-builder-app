import { call, takeEvery, select, put } from 'redux-saga/effects';
import {getItemData, createOrUpdateItemData, deleteItemData} from '../api/item';
import {
    activatePageLoader, deactivatePageLoader,
    updateItemData,
} from '../actions';
import {CREATE_UPDATE_ITEMS, DELETE_ITEM, GET_ITEMS} from "../actions/types";
import {getItemList} from "../utils/redux-selectors";

export const getItems = function* (action) {
    try {
        yield put(activatePageLoader());
        const itemData = yield call(getItemData, action.body);
        if(Object.keys(itemData.data.listItems.items).length)
            yield put(updateItemData(itemData.data.listItems.items));
        else
            yield put(updateItemData([]))
    } catch (error) {
        console.log("Error while fetching session ", error);
    }
    yield put(deactivatePageLoader());
};

export const createOrUpdateItems = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(createOrUpdateItemData, action.body);
        const itemData = yield select(getItemList);
        console.log(itemData)
        const update = !!itemData.filter(item => item.id === action.body.id).length
        const items = update ? updateItemBody(itemData, action.body) : yield call(getItemData, action.body.itemType);
        yield put(update ? updateItemData(items) : updateItemData(items.data.listItems.items));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};

export const deleteItem = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(deleteItemData, action.body);
        const itemData = yield select(getItemList);
        console.log(itemData)
        const items = itemData.filter(item => item.id !== action.body);
        yield put(updateItemData(items));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};


const updateItemBody = (itemData, body) => {
    return itemData.map(item => {
        if(item.id === body.id) {
            item.name = body.name
            item.itemType = body.itemType
            item.itemUnit = body.itemUnit
            item.rate = body.rate
            item.gst = body.gst
            item.cgst = body.cgst
            item.sgst = body.sgst
            item.igst = body.igst
            item.description = body.description
            item.createdBy = body.createdBy
            item.createdDate = body.createdDate
        }
        return item
    })
}


export default function* itemSaga() {
    yield takeEvery(GET_ITEMS, getItems);
    yield takeEvery(CREATE_UPDATE_ITEMS, createOrUpdateItems);
    yield takeEvery(DELETE_ITEM, deleteItem);
}
