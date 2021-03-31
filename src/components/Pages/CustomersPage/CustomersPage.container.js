import { connect } from 'react-redux';
import {
    getCustomers, createOrUpdateCustomerData, deleteCustomerData, getProjects
} from '../../../actions';
import {getCustomerList, getProjectList, getUserName} from "../../../utils/redux-selectors";

const mapStateToProps = state => ({
    username: getUserName(state),
    projects: getProjectList(state),
    customerList: getCustomerList(state),
});


const mapDispatchToProps = dispatch => ({
    getAllCustomers: (body) => {
        dispatch(getCustomers(body));
    },
    getAllProjects: () => {
        dispatch(getProjects());
    },
    createOrUpdateCustomer: (body) => {
        dispatch(createOrUpdateCustomerData(body));
    },
    deleteCustomer: (body) => {
        dispatch(deleteCustomerData(body));
    },
});

export default connect(mapStateToProps, mapDispatchToProps);