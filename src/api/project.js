import { API } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import { createProject as createProjectMutation, updateProject as updateProjectMutation, deleteProject as deleteProjectMutation} from "../graphql/mutations";

export const getProjectData = () => API.graphql({query: listProjects})

export const createOrUpdateProjectData = (body) => API.graphql({query: body.id ? updateProjectMutation : createProjectMutation, variables: {input: body}})

export const deleteProjectData = (body) => API.graphql({ query: deleteProjectMutation, variables: {input: {id: body}}})