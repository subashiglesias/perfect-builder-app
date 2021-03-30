import { API } from "aws-amplify";
import { listItems } from "../graphql/queries";
import { createItem as createItemMutation, updateItem as updateItemMutation, deleteItem as deleteItemMutation} from "../graphql/mutations";

export const getItemData = (body) => API.graphql({query: listItems, variables: {filter: {itemType: {eq: body}}}})

export const createOrUpdateItemData = (body) => API.graphql({query: body.id ? updateItemMutation : createItemMutation, variables: {input: body}})

export const deleteItemData = (body) => API.graphql({ query: deleteItemMutation, variables: {input: {id: body}}})