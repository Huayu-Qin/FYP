import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "../views/desktop/Home";
import Login from "../views/login/Login";

export default class AppRouter extends React.Component {
  render() {
    return (
        <div id="router">
          <HashRouter>
            <Switch>
              <Route path="/login" component={Login} exact/>
              <Route path="/home" component={Home} exact/>
              {/*<Route path="/about" component={About}/>*/}
            </Switch>
          </HashRouter>
        </div>
    )
  }
}
