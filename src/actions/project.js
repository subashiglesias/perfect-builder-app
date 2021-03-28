import {
    CREATE_UPDATE_PROJECTS,
    GET_PROJECTS,
    UPDATE_PROJECTS,
} from './types';

export const getProjects = () => ({ type: GET_PROJECTS });

export const updateProjectData = projectData => ({ type: UPDATE_PROJECTS, projectData });

export const createOrUpdateProjectData = body => ({type: CREATE_UPDATE_PROJECTS, body})