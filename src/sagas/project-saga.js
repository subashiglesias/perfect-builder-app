import { call, takeEvery, put } from 'redux-saga/effects';
import { getProjectData } from '../api/project';
import {
    updateProjectData,
} from '../actions';
import { GET_PROJECTS } from "../actions/types";

export const getProjects = function* (action) {
    try {
        const projectData = yield call(getProjectData);
        if(Object.keys(projectData.data.listProjects.items).length)
            yield put(updateProjectData(projectData.data.listProjects.items));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
};


export default function* projectSaga() {
    yield takeEvery(GET_PROJECTS, getProjects);
}
