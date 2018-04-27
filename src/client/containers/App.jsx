import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import HomePage from '../components/HomePage';
import DashboardPage from './DashboardPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Auth from '../utils/auth';


class App extends React.Component {
    render() {
        return (
        <div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <Link to="/">Scola</Link>
                </div>

                {Auth.isUserAuthenticated() ? (
                    <div className="top-bar-right">
                        <Link
                            to="/logout"
                            onClick={()=>Auth.deauthenticateUser()}>Log out</Link>
                    </div>
                ) : (
                    <div className="top-bar-right">
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                )}

            </div>
            <Switch>
                <Route exact
                path='/'
                component={Auth.isUserAuthenticated() ? DashboardPage : HomePage}
                />
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/signup' component={SignUpPage}/>
                <Route exact path='/logout' component={HomePage}/>
            </Switch>
        </div>
        )
    }
};

export default App;