import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  return (
    <Route
      {...routeProps}
      render={props => {
        return window.localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

export default PrivateRoute