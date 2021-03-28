import { connect } from 'react-redux';
import {
    getProjects
} from '../../actions';

const mapStateToProps = state => ({
    projects: state.projects.projectList,
});


const mapDispatchToProps = dispatch => ({
    getAllProjects: () => {
        dispatch(getProjects());
    },
});

export default connect(mapStateToProps, mapDispatchToProps);