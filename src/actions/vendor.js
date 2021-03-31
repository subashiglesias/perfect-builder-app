import {
    CREATE_UPDATE_VENDORS,
    DELETE_VENDOR,
    GET_VENDORS,
    UPDATE_VENDORS,
} from './types';

export const getVendors = () => ({ type: GET_VENDORS });

export const updateVendorData = vendorData => ({ type: UPDATE_VENDORS, vendorData });

export const createOrUpdateVendorData = body => ({type: CREATE_UPDATE_VENDORS, body})

export const deleteVendorData = body => ({type: DELETE_VENDOR, body})