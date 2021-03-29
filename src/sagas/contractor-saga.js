import { call, takeEvery, select, put } from 'redux-saga/effects';
import {getContractorData, createOrUpdateContractorData, deleteContractorData} from '../api/contractor';
import {
    activatePageLoader, deactivatePageLoader, updateContractorData,
    updateProjectData,
} from '../actions';
import {CREATE_UPDATE_CONTRACTORS, DELETE_CONTRACTOR, GET_CONTRACTORS} from "../actions/types";
import { getContractorList } from "../utils/redux-selectors";

export const getContractors = function* (action) {
    try {
        yield put(activatePageLoader());
        const projectData = yield call(getContractorData);
        if(Object.keys(projectData.data.listContractors.items).length)
            yield put(updateContractorData(projectData.data.listContractors.items));
    } catch (error) {
        console.log("Error while fetching session ", error);
    }
    yield put(deactivatePageLoader());
};

export const createOrUpdateContractors = function* (action) {
    try {
        yield put(activatePageLoader());
        console.log(action.body)
        yield call(createOrUpdateContractorData, action.body);
        const contractorData = yield select(getContractorList);
        console.log(contractorData)
        const update = !!contractorData.filter(contractor => contractor.id === action.body.id).length
        const contractors = update ? updateProjectBody(contractorData, action.body) : yield call(getContractorData);
        yield put(update ? updateContractorData(contractors) : updateContractorData(contractors.data.listContractors.items));
    } catch (error) {
        console.log("Error while fetching session ", error)
    }
    yield put(deactivatePageLoader());
};

export const deleteContractor = function* (action) {
    try {
        yield put(activatePageLoader());
        yield call(deleteContractorData, action.body);
        const projectData = yield select(getContractorList);
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
            project.workType = body.workType
            project.mobile = body.mobile
            project.email = body.email
            project.createdAt = body.createdAt
            project.createdBy = body.createdBy
            project.createdDate = body.createdDate
            project.updatedAt = body.updatedAt
        }
        return project
    })
}


export default function* contractorSaga() {
    yield takeEvery(GET_CONTRACTORS, getContractors);
    yield takeEvery(CREATE_UPDATE_CONTRACTORS, createOrUpdateContractors);
    yield takeEvery(DELETE_CONTRACTOR, deleteContractor);
}
