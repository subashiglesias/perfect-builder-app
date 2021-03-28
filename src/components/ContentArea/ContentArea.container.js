import { connect } from 'react-redux';
import {
    getCurrentSession
} from '../../actions';

const mapStateToProps = state => ({
    currentSession: state.currentSession,
});


const mapDispatchToProps = dispatch => ({
    getSession: () => {
        dispatch(getCurrentSession());
    },
});

export default connect(mapStateToProps, mapDispatchToProps);