import { fork, all } from 'redux-saga/effects';
import authSaga from './auth-saga'
import projectSaga from './project-saga'

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(projectSaga),
    ]);
}