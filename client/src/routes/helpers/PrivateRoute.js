'use strict'

/**
 * Dependencies
 */

import React from 'react'
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, exact: is_exact, path }) => {
  let token = localStorage.getItem("token")

  if (is_exact) {
    return (
      <Route exact path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/users/signup" />} />
    )
  } else {
    return (
      <Route path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/users/signup" />} />
    )
  }
}

/**
 * Export route component
 */

export default PrivateRoute
