import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './../pages/Register';
import Login from '../pages/Login';
import Verification from './../pages/Verification';
import ActivationEmail from './../components/activation/ActivationEmail';
import Forgot from '../pages/Forgot';
import Reset from './../pages/Reset';
import PrivateRouter from './../customRouter/PrivateRouter';
import Logout from './../pages/Logout';
import Home from '../pages/index';
import Message from './../pages/Message';
import NotFound from './../pages/NotFound';

const Routes = ()  => {
  return (
    <div>
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/verification' exact component={Verification} />
        <Route
          path='/api/activation/:activation_token'
          exact
          component={ActivationEmail}
        />
        <PrivateRouter exact path='/' component={Home} />
        <PrivateRouter exact path='/message/:id' component={Message} />
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/forgot_password' exact component={Forgot} />
        <Route path='/reset_password' exact component={Reset} />

        <Route exact component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
