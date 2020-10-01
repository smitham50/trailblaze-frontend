import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <header className="App-header">
          Header
      </header>
      </div>
    )
  }
}

export default App;
