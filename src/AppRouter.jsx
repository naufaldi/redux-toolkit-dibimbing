// src/AppRouter.js
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
// import App from './App';
// import LoginPage from './LoginPage';
// import RegisterPage from './RegisterPage';

function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} /> */}
        {/* <Redirect from="/" to="/login" /> */}
        {/* <Route path="/" componnent={App} /> */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
