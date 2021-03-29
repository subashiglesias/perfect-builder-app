import { call, takeEvery, select, put } from 'redux-saga/effects';
import {getProjectData, createOrUpdateProjectData, deleteProjectData} from '../api/project';
import {
    activatePageLoader, deactivatePageLoader,
    updateProjectData,
} from '../actions';
import {CREATE_UPDATE_PROJECTS, DELETE_PROJECT, GET_PROJECTS} from "../actions/types";
import {getProjectList} from "../utils/redux-selectors";

export const getProjects = function* (action) {
    try {
        yield put(activatePageLoader());
        const projectData = yield call(getProjectData);
        if(Object.keys(projectData.data.listProjects.items).length)
            yield put(updateProjectData(projectData.data.listProjects.items));
    } catch (error) {
        console.log("Error while fetching session ", error);
    }
    yield put(deactivatePageLoader());
};

export const createOrUpdateProjects = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(createOrUpdateProjectData, action.body);
        const projectData = yield select(getProjectList);
        console.log(projectData)
        const update = !!projectData.filter(project => project.id === action.body.id).length
        const projects = update ? updateProjectBody(projectData, action.body) : yield call(getProjectData);
        yield put(update ? updateProjectData(projects) : updateProjectData(projects.data.listProjects.items));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};

export const deleteProject = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(deleteProjectData, action.body);
        const projectData = yield select(getProjectList);
        console.log(projectData)
        const projects = projectData.filter(project => project.id !== action.body);
        yield put(updateProjectData(projects));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
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
            project.blocks = body.blocks
        }
        return project
    })
}


export default function* projectSaga() {
    yield takeEvery(GET_PROJECTS, getProjects);
    yield takeEvery(CREATE_UPDATE_PROJECTS, createOrUpdateProjects);
    yield takeEvery(DELETE_PROJECT, deleteProject);
}
