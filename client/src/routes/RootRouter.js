'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const views = require('../views/index')

/**
 * Constants
 */

const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect

/**
 * Define router
 */

function RootRouter() {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/users/login" />} />
      <Route path="/home" component={views.Home} />
    </>
  )
}

/**
 * Export router
 */

module.exports = RootRouter
