import { withRouter } from 'react-router';
import itemsPage from "./ItemsPage";
import container from './ItemsPage.container'

export default withRouter(container(itemsPage));