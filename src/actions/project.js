import {
    CREATE_UPDATE_PROJECTS,
    DELETE_PROJECT,
    GET_PROJECTS,
    UPDATE_PROJECTS,
} from './types';

export const getProjects = () => ({ type: GET_PROJECTS });

export const updateProjectData = projectData => ({ type: UPDATE_PROJECTS, projectData });

export const createOrUpdateProjectData = body => ({type: CREATE_UPDATE_PROJECTS, body})

export const deleteProjectData = body => ({type: DELETE_PROJECT, body})