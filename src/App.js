import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import './Stylesheets/Signup.css';

// Components
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Trails from './Containers/Trails';
import TrailShow from './Containers/TrailShow';
import TrailSearch from './Components/TrailSearch';


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
              <Jumbotron>
                <h1>Welcome to Trailblaze!</h1>
                <p>
                  If you've ever spent hours researching hikes in range of you because there were too many options to choose from, this app is for you.
                  Once you've made an account, tell us how far you're willing to travel and how many miles you want to hike and we'll give you ten options
                  to choose from. Pick the one you like, get directions, and add the trail to your hiked trails so it doesn't show up the next time you search.
                  Spend the time you would have spent on your computer in the woods.
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
              component={TrailShow}
            />  
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
