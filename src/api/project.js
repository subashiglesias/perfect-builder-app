import { API } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import {createProject as createProjectMutation, updateProject as updateProjectMutation} from "../graphql/mutations";

export const getProjectData = () => API.graphql({query: listProjects})

export const createOrUpdateProjectData = (body) => API.graphql({query: body.id ? updateProjectMutation : createProjectMutation, variables: {input: body}})
