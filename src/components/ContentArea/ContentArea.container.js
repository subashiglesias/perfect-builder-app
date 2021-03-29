import { connect } from 'react-redux';
import {
    getCurrentSession
} from '../../actions';
import {getPageLoading} from "../../utils/redux-selectors";

const mapStateToProps = state => ({
    currentSession: state.authReducer.currentSession,
    pageLoading: getPageLoading(state),
});


const mapDispatchToProps = dispatch => ({
    getSession: () => {
        dispatch(getCurrentSession());
    },
});

export default connect(mapStateToProps, mapDispatchToProps);