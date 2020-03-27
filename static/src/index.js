import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';
import LandingPage from './landing_page/index';
import './styles/globals';


ReactDOM.render(
    <Router>
        <Switch>
            <Route path={"/"}>
                <LandingPage/>
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
);