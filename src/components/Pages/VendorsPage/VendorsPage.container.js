import { connect } from 'react-redux';
import {
    getVendors, createOrUpdateVendorData, deleteVendorData
} from '../../../actions';
import {getVendorList, getUserName} from "../../../utils/redux-selectors";

const mapStateToProps = state => ({
    username: getUserName(state),
    vendorList: getVendorList(state),
});


const mapDispatchToProps = dispatch => ({
    getAllVendors: (body) => {
        dispatch(getVendors(body));
    },
    createOrUpdateVendor: (body) => {
        dispatch(createOrUpdateVendorData(body));
    },
    deleteVendor: (body) => {
        dispatch(deleteVendorData(body));
    },
});

export default connect(mapStateToProps, mapDispatchToProps);