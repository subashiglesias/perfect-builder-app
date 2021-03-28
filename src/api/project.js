import { API } from "aws-amplify";
import { listProjects } from "../graphql/queries";

export const getProjectData = () => API.graphql({query: listProjects})
