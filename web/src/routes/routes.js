import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from "../views/desktop/Home";
import Login from "../views/login/Login";
import PrivateRoute from './privateRoute'

export default class AppRouter extends React.Component {
  render() {
    return (
        <div id="router">
          <HashRouter>
            <Switch>
              <Route path="/login" component={Login} exact/>
              <PrivateRoute path="/home" component={Home} exact/>
              {/* <Route path="/about" component={About}/> */}
              <Route path="/" component={Login} />
            </Switch>
          </HashRouter>
        </div>
    )
  }
}
