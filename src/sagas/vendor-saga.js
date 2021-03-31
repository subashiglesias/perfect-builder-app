import { call, takeEvery, select, put } from 'redux-saga/effects';
import {getVendorData, createOrUpdateVendorData, deleteVendorData} from '../api/vendor';
import {
    activatePageLoader, deactivatePageLoader, updateVendorData,
} from '../actions';
import {
    CREATE_UPDATE_VENDORS,
    DELETE_VENDOR,
    GET_VENDORS
} from "../actions/types";
import { getVendorList } from "../utils/redux-selectors";

export const getVendors = function* (action) {
    try {
        yield put(activatePageLoader());
        const projectData = yield call(getVendorData);
        if(Object.keys(projectData.data.listVendors.items).length)
            yield put(updateVendorData(projectData.data.listVendors.items));
    } catch (error) {
        console.log("Error while fetching session ", error);
    }
    yield put(deactivatePageLoader());
};

export const createOrUpdateVendors = function* (action) {
    try {
        yield put(activatePageLoader());
        console.log(action.body)
        yield call(createOrUpdateVendorData, action.body);
        const vendorData = yield select(getVendorList);
        console.log(vendorData)
        const update = !!vendorData.filter(vendor => vendor.id === action.body.id).length
        const vendors = update ? updateProjectBody(vendorData, action.body) : yield call(getVendorData);
        yield put(update ? updateVendorData(vendors) : updateVendorData(vendors.data.listVendors.items));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};

export const deleteVendor = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(deleteVendorData, action.body);
        const vendorData = yield select(getVendorList);
        console.log(vendorData)
        const vendors = vendorData.filter(vendor => vendor.id !== action.body);
        yield put(updateVendorData(vendors));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};


const updateProjectBody = (projectData, body) => {
    return projectData.map(project => {
        if(project.id === body.id) {
            project.name = body.name
            project.itemType = body.itemType
            project.gsTin = body.gsTin
            project.address = body.address
            project.mobile = body.mobile
            project.email = body.email
            project.createdBy = body.createdBy
            project.createdDate = body.createdDate
        }
        return project
    })
}


export default function* vendorSaga() {
    yield takeEvery(GET_VENDORS, getVendors);
    yield takeEvery(CREATE_UPDATE_VENDORS, createOrUpdateVendors);
    yield takeEvery(DELETE_VENDOR, deleteVendor);
}
