import { fork, all } from 'redux-saga/effects';
import authSaga from './auth-saga'
import projectSaga from './project-saga'
import contractorSaga from './contractor-saga'
import itemSaga from "./item-saga";
import vendorSaga from "./vendor-saga";
import customerSaga from "./customer-saga";

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(projectSaga),
        fork(contractorSaga),
        fork(itemSaga),
        fork(vendorSaga),
        fork(customerSaga),
    ]);
}