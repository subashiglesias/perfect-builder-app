import {
    CREATE_UPDATE_CONTRACTORS,
    DELETE_CONTRACTOR,
    GET_CONTRACTORS,
    UPDATE_CONTRACTORS,
} from './types';

export const getContractors = () => ({ type: GET_CONTRACTORS });

export const updateContractorData = contractData => ({ type: UPDATE_CONTRACTORS, contractData });

export const createOrUpdateContractorData = body => ({type: CREATE_UPDATE_CONTRACTORS, body})

export const deleteContractorData = body => ({type: DELETE_CONTRACTOR, body})