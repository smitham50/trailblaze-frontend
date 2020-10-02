import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/Signup.css';

// Components
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navigation from './Components/Navigation';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <header className="App-header">
          <Switch>
            <Route path='/home'></Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </header>
      </div>
    )
  }
}

export default App;
