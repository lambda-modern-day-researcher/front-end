'use strict'

/**
 * Dependencies
 */

import React from 'react'
import react_redux from 'react-redux'
import react_router_dom from 'react-router-dom'
import routes from './routes/index'
import store from './store/index'

/**
 * Constants
 */

const Provider = react_redux.Provider
const BrowserRouter = react_router_dom.BrowserRouter

/**
 * Importing global styles
 */

import './App.scss'

/**
 * Define component
 */

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <routes.RootRouter mount="/" />
        <routes.UsersRouter mount="/users" />
      </BrowserRouter>
    </Provider>
  )
}

/**
 * Export component
 */

export default App
