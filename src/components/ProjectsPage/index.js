import { withRouter } from 'react-router';
import projectsPage from "./ProjectsPage";
import container from './ProjectsPage.container'

export default withRouter(container(projectsPage));