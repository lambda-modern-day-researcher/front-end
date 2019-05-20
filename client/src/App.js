'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const routes = require('./routes/index')

/**
 * Constants
 */

const BrowserRouter = react_router_dom.BrowserRouter

/**
 * Importing global styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <BrowserRouter>
      <routes.RootRouter mount="/" />
      <routes.UsersRouter mount="/users" />
    </BrowserRouter>
  )
}

/**
 * Export component
 */

module.exports = App
