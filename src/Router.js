import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ErrorPage from './pages/404error/Main';
import RegisterPage from './pages/register/Main'
import LoginPage from './pages/login/Main';
import ForgotPage from './pages/forgot/step/Main';
import ResetPage from './pages/forgot/step1/Main';

class WebPage extends Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    {/* <Route path='/' component={} exact /> */}
                    <Route path='/login' component={LoginPage} exact />
                    <Route path='/register' component={RegisterPage} exact />
                    <Route path='/forgot' component={ForgotPage} exact />
                    <Route path='/reset' component={ResetPage} exact />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        );
    }

} 

export default WebPage;