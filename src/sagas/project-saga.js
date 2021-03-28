import { call, takeEvery, select, put } from 'redux-saga/effects';
import { getProjectData, createOrUpdateProjectData } from '../api/project';
import {
    updateProjectData,
} from '../actions';
import {CREATE_UPDATE_PROJECTS, GET_PROJECTS} from "../actions/types";
import {getProjectList} from "../utils/redux-selectors";

export const getProjects = function* (action) {
    try {
        const projectData = yield call(getProjectData);
        if(Object.keys(projectData.data.listProjects.items).length)
            yield put(updateProjectData(projectData.data.listProjects.items));
    } catch (error) {
        console.log("Error while fetching session ", error);
    }
};

export const createOrUpdateProjects = function* (action) {
    try {
        yield call(createOrUpdateProjectData, action.body);
        const projectData = yield select(getProjectList);
        console.log(projectData)
        // eslint-disable-next-line no-unused-expressions
        projectData.filter(project => project.id === action.body.id).length ? updateProjectBody(projectData, action.body) : projectData.push(action.body);
        yield put(updateProjectData(projectData));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
};

const updateProjectBody = (projectData, body) => {
    return projectData.map(project => {
        if(project.id === body.id) {
            project.name = body.name
            project.comments = body.comments
            project.createdAt = body.createdAt
            project.createdBy = body.createdBy
            project.createdDate = body.createdDate
            project.noOfBlocks = body.noOfBlocks
            project.updatedAt = body.updatedAt
        }
        return project
    })
}


export default function* projectSaga() {
    yield takeEvery(GET_PROJECTS, getProjects);
    yield takeEvery(CREATE_UPDATE_PROJECTS, createOrUpdateProjects);
}
