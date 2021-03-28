import { withRouter } from 'react-router';
import container from './ContentArea.container';
import contentArea from './ContentArea';

export default withRouter(container(contentArea));


