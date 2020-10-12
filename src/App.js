import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/Signup.css';
import './Stylesheets/Carousel.css';

// Components
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Trails from './Containers/Trails';
import TrailSearch from './Components/TrailSearch';

// Scripts
import getCoordinates from './Scripts/getCoordinates';


class App extends Component {

  componentDidMount() {
    if (localStorage.userId) {
      axios.get('http://localhost:3000/api/v1/logged_in', {withCredentials: true})
        .then(resp => {
          this.props.setUser(resp.data);
          getCoordinates(this.props.setLocation);
        });
    }
  };

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
            <Route path='/trailsearch'>
              <TrailSearch></TrailSearch>
            </Route>
            <Route path='/trails'>
              <Trails></Trails>
            </Route>
          </Switch>
        </header>
      </div>
    )
  }
}

function msp(state) {
  const {
    currentUserData
  } = state.user;

  return {
    currentUserData
  };
};

function mdp(dispatch) {
  return {
    setUser: (user) => {
      dispatch({
        type: "SET_USER",
        payload: user
      })
    },
    setLocation: (coords) => {
      dispatch({
        type: "SET_LOCATION",
        payload: coords
      })
    }
  };
};

export default connect(msp, mdp)(App);
