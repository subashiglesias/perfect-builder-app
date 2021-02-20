import './App.scss';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Projects from "../Projects/Projects";


function App() {
  return (
      <div className="App">
          <AmplifySignOut />
          <header>
            <h1>Welcome to Perfect Builders</h1>
            <h3>This site is currently under construction, visit us after some time</h3>
              <Projects/>
        </header>
      </div>
  );
}

export default withAuthenticator(App);
