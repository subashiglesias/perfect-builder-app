import {
    UPDATE_PROJECTS
} from '../actions/types';

const initialState = {
    projectList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROJECTS: {
            return { ...state, projectList: action.projectData };
        }
        default:
            return state;
    }
}