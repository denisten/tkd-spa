import React from 'react';
import LoginPage from './login-page';
import {Router, Switch, Route} from "react-router-dom";
import RegistrationPage from "./registration";
import history from "./history";
import LandingPage from "./landing-page";

const App = () => {
  return (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/registration' component={RegistrationPage}/>
            <Route path='/landing' component={LandingPage}/>
        </Switch>
    </Router>
  );
};

export default App;
