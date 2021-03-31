import { call, takeEvery, select, put } from 'redux-saga/effects';
import {getCustomerData, createOrUpdateCustomerData, deleteCustomerData} from '../api/customer';
import {
    activatePageLoader, deactivatePageLoader,
    updateCustomerData,
} from '../actions';
import {CREATE_UPDATE_CUSTOMERS, DELETE_CUSTOMER, GET_CUSTOMERS} from "../actions/types";
import {getCustomerList} from "../utils/redux-selectors";

export const getCustomers = function* (action) {
    try {
        yield put(activatePageLoader());
        const customerData = yield call(getCustomerData, action.body);
        if(Object.keys(customerData.data.listCustomers.items).length)
            yield put(updateCustomerData(customerData.data.listCustomers.items));
        else
            yield put(updateCustomerData([]))
    } catch (error) {
        console.log("Error while fetching session ", error);
    }
    yield put(deactivatePageLoader());
};

export const createOrUpdateCustomers = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(createOrUpdateCustomerData, action.body);
        const customerData = yield select(getCustomerList);
        console.log(customerData)
        const update = !!customerData.filter(customer => customer.id === action.body.id).length
        const customers = update ? updateCustomerBody(customerData, action.body) : yield call(getCustomerData, action.body.projectName);
        yield put(update ? updateCustomerData(customers) : updateCustomerData(customers.data.listCustomers.items));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};

export const deleteCustomer = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(deleteCustomerData, action.body);
        const customerData = yield select(getCustomerList);
        console.log(customerData)
        const customers = customerData.filter(customer => customer.id !== action.body);
        yield put(updateCustomerData(customers));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};


const updateCustomerBody = (customerData, body) => {
    return customerData.map(customer => {
        if(customer.id === body.id) {
            customer.name = body.name
            customer.projectName = body.projectName
            customer.mobile = body.mobile
            customer.emailId = body.emailId
            customer.address = body.address
            customer.createdBy = body.createdBy
            customer.createdDate = body.createdDate
        }
        return customer
    })
}


export default function* customerSaga() {
    yield takeEvery(GET_CUSTOMERS, getCustomers);
    yield takeEvery(CREATE_UPDATE_CUSTOMERS, createOrUpdateCustomers);
    yield takeEvery(DELETE_CUSTOMER, deleteCustomer);
}
