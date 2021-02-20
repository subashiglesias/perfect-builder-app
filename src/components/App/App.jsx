import './App.scss';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Appinfo from "../AppInfo";
import ContentArea from "../ContentArea";

function App() {
  return (
      <div className="App">
          <Appinfo/>
          <ContentArea/>
      </div>
  );
}

export default withAuthenticator(App);
