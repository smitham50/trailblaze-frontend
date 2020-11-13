import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Nav } from 'react-bootstrap';
import './App.css';
import './Stylesheets/Signup.css';
import './Stylesheets/TrailsContainer.css';
import './Stylesheets/TrailShow.css';

// Components
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Trails from './Containers/Trails';
import TrailShow from './Containers/TrailShow';
import TrailSearch from './Components/TrailSearch';
import MyHikes from './Containers/MyHikes';


class App extends Component {

  componentDidMount() {
    if (localStorage.userId) {
      axios.get('http://localhost:3000/api/v1/logged_in', {withCredentials: true})
        .then(resp => {
          this.props.setLocation({
            coords: {
              latitude: localStorage.getItem('latitude'),
              longitude: localStorage.getItem('longitude')
            }
          });
          this.props.setUser(resp.data);
        });
    }
  };

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <header className="App-header">
          <Switch>
            <Route path='/home'>
              <Jumbotron className="jumbotron-mod">
                <h2>Welcome to Trailblaze!</h2>
                <p>
                  If you've ever spent hours researching hikes in range of you because there were too many choices, this app is for you.
                  Tell us how far you're willing to travel and how many miles you want to hike and we'll give you ten options
                  to choose from. Pick the one you like, get directions, and add it to your hiked trails.
                  Get to the forest without a fuss.
                </p>
                <p>
                  Happy hiking!
                </p>
              </Jumbotron>
            </Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/trailsearch'>
              <TrailSearch></TrailSearch>
            </Route>
            <Route 
              path='/trails/:slug'
              component={ TrailShow }
            />  
            <Route path='/myhikes'>
              <MyHikes></MyHikes>
            </Route>
            <Route path='/trails'>
              <Trails></Trails>
            </Route>
          </Switch>
        </header>
        <footer>
          <p><strong>Copyright 2020 Trailblaze. All rights reserved.</strong></p>
          <Nav className="justify-content-center" bg="dark" variant="dark">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </footer>
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
