import { connect } from 'react-redux';
import {
    getContractors, createOrUpdateContractorData, deleteContractorData
} from '../../../actions';
import { getContractorList } from "../../../utils/redux-selectors";

const mapStateToProps = state => ({
    contractorList: getContractorList(state),
});

const mapDispatchToProps = dispatch => ({
    getAllContractors: () => {
        dispatch(getContractors());
    },
    createOrUpdateContractor: (body) => {
        dispatch(createOrUpdateContractorData(body));
    },
    deleteContractor: (body) => {
        dispatch(deleteContractorData(body));
    },
});

export default connect(mapStateToProps, mapDispatchToProps);