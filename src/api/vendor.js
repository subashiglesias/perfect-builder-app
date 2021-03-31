import { API } from "aws-amplify";
import { listVendors } from "../graphql/queries";
import { createVendor as createVendorMutation, updateVendor as updateVendorMutation, deleteVendor as deleteVendorMutation} from "../graphql/mutations";

export const getVendorData = () => API.graphql({query: listVendors})

export const createOrUpdateVendorData = (body) => API.graphql({query: body.id ? updateVendorMutation : createVendorMutation, variables: {input: body}})

export const deleteVendorData = (body) => API.graphql({ query: deleteVendorMutation, variables: {input: {id: body}}})