import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Perfect Builders</h1>
          <h3>This site is currently under construction, visit us after some time</h3>
        </header>
        <AmplifySignOut />
      </div>
  );
}

export default withAuthenticator(App);
