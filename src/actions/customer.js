import {
    CREATE_UPDATE_CUSTOMERS,
    DELETE_CUSTOMER,
    GET_CUSTOMERS,
    UPDATE_CUSTOMERS,
} from './types';

export const getCustomers = body => ({ type: GET_CUSTOMERS, body });

export const updateCustomerData = customerData => ({ type: UPDATE_CUSTOMERS, customerData });

export const createOrUpdateCustomerData = body => ({type: CREATE_UPDATE_CUSTOMERS, body})

export const deleteCustomerData = body => ({type: DELETE_CUSTOMER, body})