'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const views = require('../views/index')
const helpers = require('./helpers/index')

/**
 * Constants
 */

const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect
const PrivateRoute = helpers.PrivateRoute

/**
 * Define router
 */

function RootRouter() {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <PrivateRoute path="/home" component={views.Home} />
      <PrivateRoute path="/friends" component={views.Friends} />
      <Route path="/login" render={() => <Redirect to="/users/signin" />} />
      <Route path="/signin" render={() => <Redirect to="/users/signin" />} />
      <Route path="/signup" render={() => <Redirect to="/users/signup" />} />
      <Route path="/register" render={() => <Redirect to="/users/signup" />} />
    </>
  )
}

/**
 * Export router
 */

module.exports = RootRouter
