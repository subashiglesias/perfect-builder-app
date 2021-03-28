import { call, takeEvery, put } from 'redux-saga/effects';
import { getAuthSession } from '../api/auth';
import {
    updateCurrentSession,
} from '../actions';
import { GET_CURRENT_SESSION } from "../actions/types";

export const getSession = function* (action) {
    try {
        const sessionData = yield call(getAuthSession);
        if(Object.keys(sessionData).length)
            yield put(updateCurrentSession(sessionData));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
};


export default function* authSaga() {
    yield takeEvery(GET_CURRENT_SESSION, getSession);
}
