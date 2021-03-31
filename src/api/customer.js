import { API } from "aws-amplify";
import { listCustomers } from "../graphql/queries";
import { createCustomer as createCustomerMutation, updateCustomer as updateCustomerMutation, deleteCustomer as deleteCustomerMutation} from "../graphql/mutations";

export const getCustomerData = (body) => API.graphql({query: listCustomers, variables: {filter: {projectName: {eq: body}}}})

export const createOrUpdateCustomerData = (body) => API.graphql({query: body.id ? updateCustomerMutation : createCustomerMutation, variables: {input: body}})

export const deleteCustomerData = (body) => API.graphql({ query: deleteCustomerMutation, variables: {input: {id: body}}})