import { withRouter } from 'react-router';
import vendorsPage from "./VendorsPage";
import container from './VendorsPage.container'

export default withRouter(container(vendorsPage));