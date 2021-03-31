import { withRouter } from 'react-router';
import customersPage from "./CustomersPage";
import container from './CustomersPage.container'

export default withRouter(container(customersPage));