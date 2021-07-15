import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import About from './Components/About';

const AppContainer = styled.div`
  text-align: center;

  .btn:focus {
    outline: none;
    box-shadow: none;
  }
  .headline {
    font-family: "Quicksand", sans-serif;
  }
  .subtext {
    font-family: "Lato", sans-serif;
  }
`;

const RouterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AppBody = styled.div`
  background-color: #ffffff21;
  margin-top: 7rem;
  min-height: 71vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  color: black;

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    padding: 0 2rem;
    min-height: calc(90vh - 1.5rem);
  }

  @media screen and (max-width: 600px) {
    min-height: 73vh;
  }
`;

const Footer = styled.footer`
  background: #d8d8d829;
  color: #635d5d;
  padding: 1.1rem 0;
  width: 100%;

  p {
    margin: 0;
    font-size: 1.1em;
  }

  .navbar-link {
    font-size: 0.8rem;
  }

  a {
    color: #909090;
  }

  a:hover {
    color: #5a5858;
  }
`;

const App = () => {
  const [checkedLogin, setCheckedLogin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserLogin = async () => {
      if (localStorage.userId) {
        const resp = await axios.get('https://nameless-wave-57808.herokuapp.com/api/v1/logged_in', { withCredentials: true });
        dispatch({
          type: "SET_LOCATION",
          payload: {
            coords: {
              latitude: localStorage.getItem("latitude"),
              longitude: localStorage.getItem("longitude")
            },
          },
        });
        dispatch({type: "SET_USER", payload: resp.data});
      }
    };

    checkUserLogin();
    
    setCheckedLogin(true);
  }, []);

  return (
    <AppContainer>
      {checkedLogin && (
        <RouterWrapper>
          <Router>
            <header>
              <Navigation></Navigation>
            </header>
            <AppBody>
              <Switch>
                <Route exact path="/">
                  <Landing></Landing>
                </Route>
                <Route exact path="/signup">
                  <Signup></Signup>
                </Route>
                <Route exact path="/login">
                  <Login></Login>
                </Route>
                <Route exact path="/account">
                  <ManageAccount></ManageAccount>
                </Route>
                <Route exact path="/update-account">
                  <UpdateAccount></UpdateAccount>
                </Route>
                <Route exact path="/trailsearch">
                  <TrailSearch></TrailSearch>
                </Route>
                <Route exact path="/trails/:slug" component={TrailShow} />
                <Route exact path="/myhikes">
                  <MyHikes></MyHikes>
                </Route>
                <Route exact path="/trails">
                  <Trails></Trails>
                </Route>
                <Route exact path="/about">
                  <About></About>
                </Route>
              </Switch>
            </AppBody>
            <Footer className="subtext">
              <p>
                Trailblaze 2021
              </p>
              <Nav className="justify-content-center">
                <Link className="nav-link navbar-link" to="/about">
                  About
                </Link>
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
      )}
    </AppContainer>
  );
};

export default App;
