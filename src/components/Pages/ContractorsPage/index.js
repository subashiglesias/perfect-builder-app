import { withRouter } from 'react-router';
import contractorsPage from "./ContractorsPage";
import container from './ContractorsPage.container'

export default withRouter(container(contractorsPage));