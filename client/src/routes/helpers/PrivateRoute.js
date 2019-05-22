'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Component = React.Component
const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, path }) => {
  let token = localStorage.getItem("token")

  return (
    <Route path={path} render={props => {
      (token) ? <Component {...props} /> : <Redirect to="/users/signup" />}} />
  )
}

/**
 * Export route component
 */

module.exports = PrivateRoute
