import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// Reducers
import userReducer from './Reducers/userreducer';
import trailSearchReducer from './Reducers/trailSearchReducer';
import trailShowReducer from './Reducers/trailShowReducer';
import myHikesReducer from './Reducers/myHikesReducer';
import formReducer from './Reducers/formReducer';

const rootReducer = combineReducers({ 
  user: userReducer, 
  trailSearch: trailSearchReducer,
  trailShow: trailShowReducer,
  myHikes: myHikesReducer,
  form: formReducer
});
const store = createStore(rootReducer);

// Axios defaults
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path={process.env.PUBLIC_URL + '/'}>
          <App/>
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
