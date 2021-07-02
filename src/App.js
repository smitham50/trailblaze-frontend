import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

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

const AppContainer = styled.div`
  text-align: center;
  & .btn:focus {
    outline: none;
    box-shadow: none;
  }
  & .headline {
    font-family: 'Amatic SC', cursive;
  }
  & .subtext {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const RouterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AppBody = styled.div`
  background-color: #ffffff21;
  margin-top: 14vh;
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: black;
`;

const Footer = styled.footer`
  font-size: 1.1em;
  background: #f5f5f5;
  color: #635d5d;
  padding: 1rem 0;
  p {
    margin: 0;
  }
  a {
    color: #909090;
  }
  a:hover {
    color: #5a5858;
  }
`;

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
    <AppContainer>
      {
        checkedLogin
          &&
            <RouterWrapper>
              <Router>
                <header>
                  <Navigation></Navigation>
                </header>
                <AppBody>
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
                </AppBody>
                <Footer className="subtext">
                  <p><strong>Trailblaze 2021</strong></p>
                  <Nav className="justify-content-center" >
                    <Link className="nav-link navbar-link" to="#">About</Link>
                    <a 
                     
                      href="mailto: smitham50@gmail.com" 
                      className="nav-link navbar-link"
                    >
                      Contact
                    </a>
                  </Nav>
                </Footer>
              </Router>
            </RouterWrapper>
      }
    </AppContainer>
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
