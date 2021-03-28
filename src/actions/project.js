import {
    GET_PROJECTS,
    UPDATE_PROJECTS,
} from './types';

export const getProjects = () => ({ type: GET_PROJECTS });

export const updateProjectData = projectData => ({ type: UPDATE_PROJECTS, projectData });