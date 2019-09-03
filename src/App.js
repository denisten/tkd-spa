import React from 'react';
import LoginPage from './login-page';
import {Router, Switch, Route} from "react-router-dom";
import RegistrationPage from "./registration";
import history from "./history";
import LandingPage from "./landing-page";
import {Provider} from "react-redux";
import store from './store';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <MainWrapper>
                    <Switch>
                        <Route exact path='/landingPage' component={LandingPage}/>
                        <Route path='/registration' component={RegistrationPage}/>
                        <Route path='/' component={LoginPage}/>
                    </Switch>
                </MainWrapper>
            </Router>
        </Provider>
    );
};

export default App;
