import * as React from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import { UserDataStore } from './stores/userDataStore';
import Entry from './features/entry';
import Result from './features/result';
import { Switch, Route } from 'react-router-dom';
import { create } from 'mobx-persist'

const logo = require('./logo.svg');

const hydrate = create({
  storage: localStorage,
  jsonify: false  
})

const userDataStore = new UserDataStore()

const initialState =  {
  data: JSON.parse(localStorage.getItem("userDataStore") || `{ data = "ff" }`)
}
const result = hydrate('userDataStore', userDataStore, initialState)
/*
result.then((x) => {
  console.log('some hydrated');
  console.log(x);
});*/

const rehydrate = result.rehydrate
setTimeout(() => {
rehydrate().then((x) => {
  console.log('rehydrated');
  console.log(x.data);
  console.log(x);
})
}, 3000);


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
