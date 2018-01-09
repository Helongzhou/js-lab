import * as React from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import { userDataStore } from './stores/userDataStore';
import Entry from './features/entry';
import Result from './features/result';
import { Switch, Route } from 'react-router-dom';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="page-content">        
          <Provider userStore={userDataStore} >
              <Switch>
                <Route exact={true} path="/" component={Entry} />
                <Route path='/result' component={Result} />
              </Switch>
            </Provider>
        </div>
      </div>
    );
  }
}

export default App;
