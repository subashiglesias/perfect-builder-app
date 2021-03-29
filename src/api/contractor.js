import { API } from "aws-amplify";
import { listContractors } from "../graphql/queries";
import { createContractor as createContractorMutation, updateContractor as updateContractorMutation, deleteContractor as deleteContractorMutation} from "../graphql/mutations";

export const getContractorData = () => API.graphql({query: listContractors})

export const createOrUpdateContractorData = (body) => API.graphql({query: body.id ? updateContractorMutation : createContractorMutation, variables: {input: body}})

export const deleteContractorData = (body) => API.graphql({ query: deleteContractorMutation, variables: {input: {id: body}}})