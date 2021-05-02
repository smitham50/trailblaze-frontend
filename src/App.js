import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
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
import Landing from './Components/Landing';


const App = (props) => {
  const [checkedLogin, setCheckedLogin] = useState(false);
  console.log('outside effect', props);

  useEffect(() => {
    console.log("props: ", props)
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
              <Router>
                <header>
                  <Navigation></Navigation>
                </header>
                <div className="App-body">
                    <Switch>
                      <Route exact path='/'>
                        <Landing></Landing>
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
