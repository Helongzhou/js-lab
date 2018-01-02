import * as React from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div id="outer-container" className="fill">
        <div className="App-header">
          <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a className="menu-item--small" href="">Settings</a>
          </Menu>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <p id="page-wrap">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        </div>
      </div>
    );
  }
}

export default App;
