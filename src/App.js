import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Nav } from 'react-bootstrap';
import './App.css';
import './Stylesheets/Navbar.css';
import './Stylesheets/ManageAccount.css';
import './Stylesheets/Landing.css';
import './Stylesheets/Signup.css';
import './Stylesheets/TrailsContainer.css';
import './Stylesheets/TrailShow.css';

// Components
import Signup from './Components/Signup';
import Login from './Components/Login';
import UpdateAccount from './Components/UpdateAccount';
import ManageAccount from './Components/ManageAccount';
import Navigation from './Components/Navigation';
import Trails from './Containers/Trails';
import TrailShow from './Containers/TrailShow';
import TrailSearch from './Components/TrailSearch';
import MyHikes from './Containers/MyHikes';


const App = (props) => {
  const [checkedLogin, setCheckedLogin] = useState(false);

  useEffect(() => {
    const checkUserLogin = async () => {
      if (localStorage.userId) {
        const resp = await axios.get('https://nameless-wave-57808.herokuapp.com/api/v1/logged_in', { withCredentials: true });
        props.setLocation({
          coords: {
            latitude: localStorage.getItem('latitude'),
            longitude: localStorage.getItem('longitude')
          }
        });
        props.setUser(resp.data);
      }
    };

    checkUserLogin();
    
    setCheckedLogin(true);
  }, []);

  return (
    <div className="App">
      {
        checkedLogin
          ?
            <div className="wrapper">
              <Router basename='/trailblaze-frontend'>
                <Navigation></Navigation>
                <div className="App-header">
                    <Switch>
                      <Route exact path='/'>
                        <Jumbotron className="jumbotron-mod">
                          <h1 className="headline">Welcome to Trailblaze</h1>
                          <p className="subtext">
                            If you've ever spent hours researching hikes in range of you because there were too many choices, this app is for you.
                            Tell us how far you're willing to travel and how many miles you want to hike and we'll give you twenty options
                            to choose from. Pick the one you like, get directions, and add it to your hiked trails.
                            Get to the forest without a fuss.
                          </p>
                        </Jumbotron>
                      </Route>
                      <Route exact path='/signup'>
                        <Signup></Signup>
                      </Route>
                      <Route exact path='/login'>
                        <Login></Login>
                      </Route>
                      <Route exact path='/account'>
                        <ManageAccount></ManageAccount>
                      </Route>
                      <Route exact path='/update-account'>
                        <UpdateAccount></UpdateAccount>
                      </Route>
                      <Route exact path='/trailsearch'>
                        <TrailSearch></TrailSearch>
                      </Route>
                      <Route
                        exact path='/trails/:slug'
                        component={TrailShow}
                      />
                      <Route exact path='/myhikes'>
                        <MyHikes></MyHikes>
                      </Route>
                      <Route exact path='/trails'>
                        <Trails></Trails>
                      </Route>
                    </Switch>
                </div>
                <footer className="subtext footer-copyright">
                  <p><strong>Copyright 2020 Trailblaze. All rights reserved.</strong></p>
                  <Nav className="justify-content-center footer-link" bg="dark" variant="dark">
                    <Link className="nav-link navbar-link" to="#">About</Link>
                    <Link className="nav-link navbar-link" to="#">Contact</Link>
                  </Nav>
                </footer>
              </Router>
            </div>
          :
            null
      }
    </div>
  );
};

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
