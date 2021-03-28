import { connect } from 'react-redux';
import {
    getProjects, createOrUpdateProjectData, deleteProjectData
} from '../../actions';
import { getProjectList } from "../../utils/redux-selectors";

const mapStateToProps = state => ({
    projectList: getProjectList(state),
});


const mapDispatchToProps = dispatch => ({
    getAllProjects: () => {
        dispatch(getProjects());
    },
    createOrUpdateProjects: (body) => {
        dispatch(createOrUpdateProjectData(body));
    },
    deleteProject: (body) => {
        dispatch(deleteProjectData(body));
    },
});

export default connect(mapStateToProps, mapDispatchToProps);